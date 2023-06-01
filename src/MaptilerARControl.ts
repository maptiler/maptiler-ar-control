import { Map, LngLatBounds, LngLat, IControl } from "@maptiler/sdk";

import { ModelViewerElement } from "@google/model-viewer/dist/model-viewer";



import EventEmitter from "events";
import * as THREE from "three";
// import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

type CameraSettings = {
  center: LngLat;
  zoom: number;
  pitch: number;
  bearing: number;
};

type MapTextureData = {
  width: number;
  height: number;
  pixelData: Uint8Array;
  bounds: LngLatBounds;
};

type TileIndex2D = {
  x: number;
  y: number;
};

const MIN_TERRAIN_ZOOM = 12;
const TERRAIN_TILE_SIZE = 512;

function removeDomNode(node) {
  node.parentNode.removeChild(node);
}

function latLon2Tile(
  zoom: number,
  lon: number,
  lat: number,
  round = true
): TileIndex2D {
  const x = ((lon + 180) / 360) * Math.pow(2, zoom);
  const y =
    ((1 -
      Math.log(
        Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
      ) /
        Math.PI) /
      2) *
    Math.pow(2, zoom);

  if (round) {
    return {
      x: Math.floor(x),
      y: Math.floor(y),
    };
  } else {
    return {
      x,
      y,
    };
  }
}

export function mapTextureDataToCanvas(mtd: MapTextureData): HTMLCanvasElement {
  // Create a blank canvas
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = mtd.width;
  textureCanvas.height = mtd.height;
  const ctx = textureCanvas.getContext("2d");

  if (!ctx) throw new Error("Unable to create a canvas with context.");

  // Fill the blank canvas with color data from map
  const canvasImageData = ctx.getImageData(0, 0, mtd.width, mtd.height);
  canvasImageData.data.set(mtd.pixelData);
  ctx.putImageData(canvasImageData, 0, 0);

  return textureCanvas;
}

async function createMosaic(
  tileIndexTopLeft: TileIndex2D,
  tileIndexBottomRight: TileIndex2D,
  zoom: number,
  tilesetURLs: Array<string>
): Promise<HTMLCanvasElement> {
  const nbTileX = tileIndexBottomRight.x - tileIndexTopLeft.x + 1;
  const nbTileY = tileIndexBottomRight.y - tileIndexTopLeft.y + 1;
  const canvas = document.createElement("canvas");
  canvas.width = nbTileX * TERRAIN_TILE_SIZE;
  canvas.height = nbTileY * TERRAIN_TILE_SIZE;
  const context = canvas.getContext("2d");

  if (!context) throw new Error("The context is invalid");

  let shiftX = 0;
  let shiftY = 0;

  const promises = [];

  for (let j = tileIndexTopLeft.y; j <= tileIndexBottomRight.y; j += 1) {
    for (let i = tileIndexTopLeft.x; i <= tileIndexBottomRight.x; i += 1) {
      const imageUrlPattern =
        tilesetURLs[~~(Math.random() * tilesetURLs.length)];
      const imageUrl = imageUrlPattern
        .replace("{x}", i.toString())
        .replace("{y}", j.toString())
        .replace("{z}", zoom.toString());
      promises.push(
        injectToContext(imageUrl, context, [
          shiftX * TERRAIN_TILE_SIZE,
          shiftY * TERRAIN_TILE_SIZE,
        ])
      );
      shiftX++;
    }
    shiftX = 0;
    shiftY++;
  }

  await Promise.all(promises);
  return canvas;
}

function injectToContext(
  imageUrl: string,
  context: CanvasRenderingContext2D,
  topLeftPosition: [number, number]
): Promise<void> {
  return new Promise((resolve, _) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imageUrl;
    image.onload = function () {
      context.drawImage(image, topLeftPosition[0], topLeftPosition[1]);
      resolve();
    };

    image.onerror = function () {
      resolve();
    };
  });
}

function cropCanvas(
  cropPosition: number[],
  cropSize: number[],
  inputCanvas: HTMLCanvasElement
): HTMLCanvasElement {
  const left = cropPosition[0];
  const top = cropPosition[1];
  const width = cropSize[0];
  const height = cropSize[1];
  const destCanvas = document.createElement("canvas");
  destCanvas.width = width;
  destCanvas.height = height;
  destCanvas.getContext("2d")?.drawImage(
    inputCanvas,
    left,
    top,
    width,
    height, // source rect with content to crop
    0,
    0,
    width,
    height
  ); // newCanvas, same size as source rect
  return destCanvas;
}

/**
 * A promise version of the `Map` "idle" event
 * @param map
 * @returns
 */
function idleAsync(map: Map) {
  return new Promise<boolean>(function (myResolve, myReject) {
    map.once("idle", () => {
      myResolve(true);
    });
  });
}

export class MaptilerARControl extends EventEmitter implements IControl {
  private controlButton: HTMLButtonElement;
  private controlButtonContainer: HTMLDivElement;
  private map!: Map;
  private colorData: MapTextureData | null = null;
  private landMaskData: MapTextureData | null = null;
  private terrainData: MapTextureData | null = null;
  private cameraSettings!: CameraSettings;
  private hasTerrain!: boolean;
  private terrainExaggeration!: number;
  private terrainSourceID!: string;
  private meterPerPixelCenter = 0;
  private originalPixelRatio = 0;
  private mapCaptureBounds!: LngLatBounds;

  private threeScene!: THREE.Scene;
  private threeCamera!: THREE.PerspectiveCamera;
  private threeRenderer!: THREE.WebGLRenderer;
  private threeControler!: THREE.XRTargetRaySpace;
  private threeOrbitControls!: OrbitControls;
  private threeTileContainer!: THREE.Object3D;
  private itemsToDispose: Array<
    | THREE.CanvasTexture
    | THREE.DataTexture
    | THREE.RawShaderMaterial
    | THREE.PlaneGeometry
    | THREE.MeshBasicMaterial
  > = [];
  private gltfExporter: GLTFExporter = new GLTFExporter();

  constructor(map: Map | null = null) {
    super();
    if (map !== null) this.setMap(map);
  }

  onAdd(map: maplibregl.Map): HTMLElement {
    this.setMap(map as Map);

    // Creation of the button to show on map
    this.controlButtonContainer = window.document.createElement("div");
    this.controlButtonContainer.className = "maplibregl-ctrl maplibregl-ctrl-group";

    this.controlButton = window.document.createElement("button");
    this.controlButton.className = "maptiler-ar-ctrl";
    this.controlButtonContainer.appendChild(this.controlButton);

    const iconSpan = window.document.createElement("span");
    iconSpan.className = "maplibregl-ctrl-icon";
    iconSpan.setAttribute("aria-hidden", "true");
    this.controlButton.appendChild(iconSpan);
    iconSpan.innerText = "AR";

    iconSpan.style.textAlign = "center";
    iconSpan.style.fontFamily = "sans-serif";
    iconSpan.style.fontWeight = "600";
    iconSpan.style.fontSize = "13px";
    iconSpan.style.paddingTop = "10px";
    iconSpan.style.color = "#5c636e";
    this.controlButton.type = "button";

    this.controlButton.addEventListener("click", async (evt) => {
      this.emit("computeStart");
      
      await this.computeTextures();
      const colorData = this.getColorData();
      const terrainData = this.getTerrainData();

      if (!colorData) return;
      if (!terrainData) return;
      
      this.buildMapModel();

      this.displayModal();
    });


    this.init3DScene(null);

    return this.controlButtonContainer;
  }

  onRemove() {
    this.dispose();
    this.controlButtonContainer.parentNode.removeChild(this.controlButtonContainer);
  }



  setMap(m: Map) {
    this.map = m;
  }

  getMeterPerPixelCenter(): number {
    return this.meterPerPixelCenter;
  }

  getColorData(): MapTextureData | null {
    return this.colorData;
  }

  getLandMaskData(): MapTextureData | null {
    return this.landMaskData;
  }

  getTerrainData(): MapTextureData | null {
    return this.terrainData;
  }

  private saveMapSettings() {
    this.cameraSettings = {
      center: this.map.getCenter(),
      zoom: this.map.getZoom(),
      pitch: this.map.getPitch(),
      bearing: this.map.getBearing(),
    };

    this.terrainExaggeration = this.map.getTerrainExaggeration();
    this.hasTerrain = this.map.hasTerrain();
    this.originalPixelRatio = this.map.getPixelRatio();
    if (this.hasTerrain) {
      this.terrainSourceID = this.map.getTerrain().source;
    }
  }

  private restoreMapSettings() {
    this.map.setPixelRatio(this.originalPixelRatio);
    this.map.triggerRepaint();

    if (this.hasTerrain) {
      this.map.setTerrain({
        source: this.terrainSourceID,
        exaggeration: this.terrainExaggeration,
      });
    }

    this.map.jumpTo(this.cameraSettings);
  }

  private enableTopView() {
    this.saveMapSettings();

    if (this.hasTerrain) {
      // @ts-ignore
      this.map.setTerrain(null);
    }

    this.map.setPixelRatio(4);
    this.map.triggerRepaint();

    const topViewCameraSettings = {
      center: this.cameraSettings.center,
      zoom: this.cameraSettings.zoom,
      pitch: 0,
      bearing: 0,
    };

    this.map.jumpTo(topViewCameraSettings);
  }

  private grabGlData(): MapTextureData {
    // Gettings the WebGL context from the map's canvas
    const canvas = this.map.getCanvas();
    const gl = canvas.getContext("webgl");
    if (!gl) throw new Error("The WebGL context of the map is undefined");

    // getting the gl drawing buffer
    const pixels = new Uint8Array(
      gl.drawingBufferWidth * gl.drawingBufferHeight * 4
    );

    // Getting the pixel values from the GL buffer
    gl.readPixels(
      0,
      0,
      gl.drawingBufferWidth,
      gl.drawingBufferHeight,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels
    );

    // Saving color data with some metadata
    return {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
      pixelData: pixels,
      bounds: this.map.getBounds(),
    };
  }

  /**
   * Compute the color data (pixels values + metadata) for the vieport map
   */
  async computeColorData() {
    this.emit("startComputeColorData");
    // Wait for the map to be fully loaded on the top view
    await idleAsync(this.map);
    this.colorData = this.grabGlData();
    this.emit("endComputeColorData", {});
  }

  /**
   * Compute the color data (pixels values + metadata) for the vieport map
   */
  private async computeLandMaskData() {
    this.emit("startComputeLandMaskData", {});

    this.map.addSource("xr_module_global_blackout_source", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-180, -90],
              [-180, 90],
              [180, 90],
              [180, -90],
              [-180, -90],
            ],
          ],
        },
      },
    });

    this.map.addLayer({
      id: "xr_module_global_blackout_layer",
      type: "fill",
      source: "xr_module_global_blackout_source",
      layout: {},
      paint: {
        "fill-color": "#000",
        "fill-opacity": 1,
      },
    });

    this.map.addSource("xr_module_land_source", {
      type: "vector",
      url: "https://api.maptiler.com/tiles/land/tiles.json?key=bod4IIn9bwK8mnZIk49v",
    });

    this.map.addLayer({
      id: "xr_module_land_layer",
      type: "fill",
      source: "xr_module_land_source",
      "source-layer": "land",
      layout: {},
      paint: {
        "fill-color": "#fff",
        "fill-opacity": 1,
      },
    });

    // Wait for the map to be fully loaded on the top view
    await idleAsync(this.map);

    // Saving color data with some metadata
    this.landMaskData = this.grabGlData();

    this.map.removeLayer("xr_module_global_blackout_layer");
    this.map.removeLayer("xr_module_land_layer");
    this.map.removeSource("xr_module_global_blackout_source");
    this.map.removeSource("xr_module_land_source");

    await idleAsync(this.map);

    this.emit("endComputeLandMaskData", {});
  }

  private async computeTerrainData_VIEWPORT() {
    this.emit("startComputeTerrainData", {});

    this.map.addSource("xr_module_terrain_source", {
      type: "raster",
      url: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json",
    });

    this.map.addLayer({
      id: "xr_module_terrain_layer",
      source: "xr_module_terrain_source",
      type: "raster",
      minzoom: 0,
      layout: {
        visibility: "visible",
      },
      paint: {
        "raster-opacity": 1,
      },
      filter: ["all"],
    });

    // Wait for the map to be fully loaded on the top view
    await idleAsync(this.map);

    // Saving color data with some metadata
    this.terrainData = this.grabGlData();

    this.map.removeLayer("xr_module_terrain_layer");
    this.map.removeSource("xr_module_terrain_source");

    await idleAsync(this.map);

    this.emit("endComputeTerrainData", {});
  }

  private async computeTerrainData() {
    this.emit("startComputeTerrainData", {});

    // For fetching tiles, the zoom level we use must be integer and not above the max zoom level for terrain data
    const zoom = Math.min(Math.floor(this.map.getZoom()), MIN_TERRAIN_ZOOM);
    const bounds = this.map.getBounds();
    const north = bounds.getNorth();
    const south = bounds.getSouth();
    const east = bounds.getEast();
    const west = bounds.getWest();

    const tileIndexTopLeft = latLon2Tile(zoom, west, north, false);
    const tileIndexTopLeftFloored = {
      x: Math.floor(tileIndexTopLeft.x),
      y: Math.floor(tileIndexTopLeft.y),
    };

    const tileIndexBottomRight = latLon2Tile(zoom, east, south, false);
    const tileIndexBottomRightFloored = {
      x: Math.floor(tileIndexBottomRight.x),
      y: Math.floor(tileIndexBottomRight.y),
    };

    // The terrainCanvas is rounded up to be aligned with the tile
    const sdkConfig = this.map.getSdkConfig();
    const mtsid = this.map.getMaptilerSessionId();
    const terrainCanvas = await createMosaic(
      tileIndexTopLeftFloored,
      tileIndexBottomRightFloored,
      zoom,
      [
        `https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key=${sdkConfig.apiKey}&mtsid=${mtsid}&module=xr`,
      ]
    );

    // We need to crop the canvas so that it actually fits the actual viewport
    const offset = [
      Math.floor(
        TERRAIN_TILE_SIZE * (tileIndexTopLeft.x - tileIndexTopLeftFloored.x)
      ), // width
      Math.floor(
        TERRAIN_TILE_SIZE * (tileIndexTopLeft.y - tileIndexTopLeftFloored.y)
      ), // height
    ];

    const size = [
      Math.ceil(
        TERRAIN_TILE_SIZE * (tileIndexBottomRight.x - tileIndexTopLeft.x)
      ),
      Math.ceil(
        TERRAIN_TILE_SIZE * (tileIndexBottomRight.y - tileIndexTopLeft.y)
      ),
    ];

    const nbTile = [
      tileIndexBottomRight.x - tileIndexTopLeft.x,
      tileIndexBottomRight.y - tileIndexTopLeft.y,
    ];

    const croppedCanvas = cropCanvas(offset, size, terrainCanvas);
    const pixels = croppedCanvas
      .getContext("2d")
      ?.getImageData(0, 0, croppedCanvas.width, croppedCanvas.height).data;

    if (!pixels) throw new Error("Unable to extract terrain data.");

    this.terrainData = {
      width: croppedCanvas.width,
      height: croppedCanvas.height,
      pixelData: new Uint8Array(pixels.buffer),
      bounds,
    };

    this.emit("endComputeTerrainData", {});
  }

  async computeTextures() {
    // Set the view from top and axis-aligned
    this.enableTopView();

    console.time("Compute color texture");
    await this.computeColorData();
    console.timeEnd("Compute color texture");

    // console.time("Compute water texture")
    // await this.computeLandMaskData();
    // console.timeEnd("Compute water texture")

    console.time("Compute terrain texture");
    await this.computeTerrainData();
    console.timeEnd("Compute terrain texture");

    // if (!this.terrainData) return;

    if (!this.colorData) throw new Error("The color texture is invalid.");

    // Compute the resolution in meter per pixel
    this.mapCaptureBounds = this.map.getBounds();
    const center = this.mapCaptureBounds.getCenter();
    const middleWest = new LngLat(this.mapCaptureBounds.getWest(), center.lat);
    const middleEast = new LngLat(this.mapCaptureBounds.getEast(), center.lat);
    const distance = middleEast.distanceTo(middleWest);
    this.meterPerPixelCenter = distance / this.colorData?.width;

    // Set the camera back to normal
    this.restoreMapSettings();

    // Wait for the map to be fully loaded on the original camera settings
    await idleAsync(this.map);
  }

  init3DScene(container: HTMLDivElement | null) {
    const width = container?.clientWidth || 500;
    const height = container?.clientHeight || 500;

    this.threeScene = new THREE.Scene();
    this.threeCamera = new THREE.PerspectiveCamera(
      50,
      width / height,
      0.001,
      1000
    );
    this.threeCamera.position.set(0, 10, 10);

    this.threeRenderer = new THREE.WebGLRenderer({ antialias: true });
    this.threeRenderer.setClearColor(0xffffff, 0);
    this.threeRenderer.setPixelRatio(window.devicePixelRatio);
    this.threeRenderer.setSize(width, height);
    // this.threeRenderer.xr.enabled = true
    // this.threeControler = this.threeRenderer.xr.getController( 0 );

    if (container) {
      container.appendChild(this.threeRenderer.domElement);
      // container.appendChild( ARButton.createButton( this.threeRenderer ) )
    }

    this.threeOrbitControls = new OrbitControls(
      this.threeCamera,
      this.threeRenderer.domElement
    );
    // this.itemsToDispose.push(this.threeOrbitControls);

    this.threeTileContainer = new THREE.Object3D();
    this.threeScene.add(this.threeTileContainer);

    // the scale must really be much smaller than the original object,
    // maybe it's in meters...
    this.threeTileContainer.rotateX(-Math.PI / 2);

    // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // const cube = new THREE.Mesh( geometry, material );
    // this.threeScene.add( cube );

    // const dl = new THREE.DirectionalLight(0xffffff, 1);
    // dl.position.set(10, 10, 10);
    // this.threeScene.add(dl);

    // const light = new THREE.AmbientLight( 0xffffff ); // soft white light
    // this.threeScene.add( light );

    // this.animate();
  }

  buildMapModel() {
    // remove a potentially existing map mesh from a previous run
    this.threeTileContainer.clear();

    // Delete all GPU buffers from a previous run
    this.dispose();

    const modelData = this.createMapMesh();

    const meshWidth = 10;
    const ratio = (meshWidth * 1) / modelData.widthMeter;
    this.threeTileContainer.scale.x = ratio;
    this.threeTileContainer.scale.y = ratio;
    this.threeTileContainer.scale.z = ratio;
    this.threeTileContainer.add(modelData.model);

    console.log("DONE");
  }

  render3D = () => {
    this.threeOrbitControls.update();
    this.threeRenderer.render(this.threeScene, this.threeCamera);
  };

  animate = () => {
    this.threeRenderer.setAnimationLoop(this.render3D);
  };

  private createMapMesh(): {
    model: THREE.Object3D;
    widthMeter: number;
    heightMeter: number;
  } {
    if (!this.colorData) throw new Error("Color textures is not ready.");
    if (!this.terrainData) throw new Error("Terrain textures is not ready.");

    // const mapTexture = new THREE.DataTexture(this.colorData.pixelData, this.colorData.width, this.colorData.height);

    console.time("making canvas");
    const colorCanvas = mapTextureDataToCanvas(this.colorData);
    console.timeEnd("making canvas");

    console.log('oioioi');
    

    console.time("tracing borders");
    const ctx = colorCanvas.getContext("2d");

    if (!ctx) throw new Error("Color texture not available");

    // Use a base color and darken it to use on the north/south side
    const baseColor = new THREE.Color("#7b8487");
    // const darkerColor = baseColor.clone().offsetHSL(0, 0, -0.2);
    const darkerColor = baseColor.clone().multiplyScalar(0.65);

    ctx.fillStyle = `#${baseColor.getHexString()}`;
    const thickness =
      Math.ceil(this.colorData.width / this.terrainData.width) * 1.5;

    // upper band
    ctx.fillRect(0, 0, colorCanvas.width - 1, thickness);

    // bottom
    ctx.fillRect(
      0,
      colorCanvas.height - 1 - thickness,
      colorCanvas.width - 1,
      colorCanvas.height - 1
    );

    ctx.fillStyle = `#${darkerColor.getHexString()}`;

    // left band
    ctx.fillRect(0, 0, thickness, colorCanvas.height - 1);

    // right
    ctx.fillRect(
      colorCanvas.width - 1 - thickness,
      0,
      colorCanvas.width - 1,
      colorCanvas.height - 1
    );

    console.timeEnd("tracing borders");

    const mapTexture = new THREE.CanvasTexture(colorCanvas);
    mapTexture.flipY = false;

    // @ts-ignore
    mapTexture.colorSpace = THREE.SRGBColorSpace; // for some reason, the TS types do not mention this
    mapTexture.needsUpdate = true;

    this.itemsToDispose.push(mapTexture);
    // this.itemsToDispose.push(terrainTexture);

    const material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: mapTexture,
    });

    const bounds = this.mapCaptureBounds;
    const widthMeter = bounds.getSouthEast().distanceTo(bounds.getSouthWest());
    const heightMeter = bounds.getSouthEast().distanceTo(bounds.getNorthEast());

    // creating the mountain mesh and adding it to the scene
    const mapGeom = new THREE.PlaneGeometry(
      widthMeter,
      heightMeter,
      this.terrainData.width - 1,
      this.terrainData.height - 1
    );
    const mapMesh = new THREE.Mesh(mapGeom, material);

    // const elevation = terrain8BitData.pixelData;
    const positionBuf = mapGeom.attributes.position.array;

    console.time("Applying elevation");
    const w = this.terrainData.width;
    const h = this.terrainData.height;

    for (let i = 0; i < positionBuf.length / 3; i += 1) {
      const r = this.terrainData.pixelData[i * 4];
      const g = this.terrainData.pixelData[i * 4 + 1];
      const b = this.terrainData.pixelData[i * 4 + 2];
      let elevation = -10000 + (r * 256 * 256 + g * 256 + b) * 0.1;

      const xInput = i % w;
      const yInput = ~~(i / w);

      if (
        xInput === 0 ||
        yInput === 0 ||
        xInput === w - 1 ||
        yInput === h - 1
      ) {
        elevation = 0;
      }

      // @ts-ignore
      positionBuf[i * 3 + 2] = elevation;
    }

    console.timeEnd("Applying elevation");

    this.itemsToDispose.push(mapGeom);

    const bottomPlaneGeom = new THREE.PlaneGeometry(
      widthMeter,
      heightMeter,
      1,
      1
    );
    const bottomPlaneMat = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      color: 0x1f1512,
    });
    const bottomPlaneMesh = new THREE.Mesh(bottomPlaneGeom, bottomPlaneMat);

    this.itemsToDispose.push(bottomPlaneGeom);
    this.itemsToDispose.push(bottomPlaneMat);

    const model = new THREE.Object3D();
    model.add(mapMesh);
    model.add(bottomPlaneMesh);

    return {
      model,
      widthMeter,
      heightMeter,
    };
  }

  dispose() {
    while (this.itemsToDispose.length) {
      const itemToDispose = this.itemsToDispose.pop();
      itemToDispose?.dispose();
    }
  }

  export(binary = false) {
    this.gltfExporter.parse(
      this.threeScene,

      // success
      (gltfPayload) => {
        console.log(gltfPayload);

        let gltfBlob: Blob;

        if (binary) {
          gltfBlob = new Blob([gltfPayload as ArrayBuffer], {
            type: "application/octet-stream",
          });
        } else {
          const gltfJson = JSON.stringify(gltfPayload, null, 2);
          gltfBlob = new Blob([gltfJson], { type: "text/plain" });
        }

        const link = document.createElement("a");
        link.style.display = "none";
        document.body.appendChild(link);
        link.href = URL.createObjectURL(gltfBlob);
        link.download = `maptiler_scene.${binary ? "glb" : "gltf"}`;
        link.click();
      },

      // error
      (err) => {
        console.log("error:", err);
      },

      // options
      {
        binary: binary,
        maxTextureSize: 8192,
      }
    );
  }


  async getModelBlob(): Promise<Blob> {
    return new Promise((resolve, reject) => {

      this.gltfExporter.parse(
        this.threeScene,

        // success
        (gltfPayload) => {
          const gltfBlob = new Blob([gltfPayload as ArrayBuffer], {
            type: "application/octet-stream",
          });

          resolve(gltfBlob);
        },

        // error
        (err) => {
          reject(err);
        },

        // options
        {
          binary: true,
          maxTextureSize: 8192,
        }
      );
    })
  }



  private async displayModal() {
    if(!typeof(window)) return
    
    const container = this.map.getContainer();
    console.log(container);

    const modelBlob = await this.getModelBlob();
    const modelObjectURL = URL.createObjectURL(modelBlob);
    const modelUrl = new URL(modelObjectURL, self.location.toString());

    console.log("modelObjectURL", modelObjectURL);
    console.log("modelUrl", modelUrl);
    

    this.emit("computeEnd");
    

    // const container = document.getElementById("container");
    // container.style.width = "100%";
    // container.style.height = "100%";

    console.log(ModelViewerElement);
    

    const modelViewer = document.createElement("model-viewer");
    modelViewer.src = modelObjectURL;
    // modelViewer.src = "images/maptiler_scene (2).glb"
    modelViewer.setAttribute("ar", "true");
    modelViewer.setAttribute("ar-modes", "webxr quick-look");
    modelViewer.setAttribute("camera-controls", "true");
    modelViewer.setAttribute("shadow-intensity", "1");
    modelViewer.style.width = "100%";
    modelViewer.style.height = "100%";
    modelViewer.style.zIndex = "3";
    modelViewer.style.position = "absolute";
    modelViewer.style.background = "#FFFFFF";
    console.log(modelViewer);

    container.appendChild(modelViewer);

    console.log("hello");

    const arButton = document.createElement("button");
    arButton.setAttribute("slot", "ar-button");
    arButton.id = "ar-button";
    arButton.innerText = "View in your space";
    modelViewer.appendChild(arButton);

    const closeButton = document.createElement("div");
    closeButton.innerHTML = "[ close ]";
    closeButton.style.position = "absolute";
    closeButton.style.left = "0";
    closeButton.style.bottom = "0";
    closeButton.style.zIndex = "4";
    closeButton.style.margin = "4px";
    closeButton.style.cursor = "pointer";
    modelViewer.appendChild(closeButton);

    closeButton.addEventListener("click", async (evt) => {      
      this.dispose();
      removeDomNode(arButton);
      removeDomNode(modelViewer);
      removeDomNode(closeButton);
    })
  }
}
