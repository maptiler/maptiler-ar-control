// @ts-nocheck

import { Map, LngLatBounds, LngLat, IControl } from "@maptiler/sdk";
import { ModelViewerElement } from "./model-viewer";

import EventEmitter from "events";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { USDZExporter } from "./USDZExporter";
import { addWatermarkToContext } from "./tools";

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

// Small iOS detector borrowed from ModelViewer
const IS_IOS =
  (/iPad|iPhone|iPod/.test(navigator.userAgent) && !(self as any).MSStream) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const MIN_TERRAIN_ZOOM = 12;
const TERRAIN_TILE_SIZE = 512;

function loadImgAsync(path: string): Promise<Image> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      resolve(img);
    };

    img.onerror = function (e) {
      reject(e);
    };
    img.src = path;
  });
}

async function loadTexture(filepath: string): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();

    // load a resource
    loader.load(
      // resource URL
      filepath,

      // onLoad callback
      function (texture) {
        resolve(texture);
      },

      // onProgress callback currently not supported
      undefined,

      // onError callback
      function (err) {
        reject(err);
      }
    );
  });
}

function removeDomNode(node: any) {
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

/**
 * Options for the Maptiler AR Control
 */
export type MaptilerARControlOptions = {
  /**
   * Shows the AR button if `true`, hide it otherwise.
   * Default: `true`
   */
  showButton?: boolean;

  /**
   * Background color (css compatible).
   * Default: `"#FFFFFF"` (white)
   */
  background?: string;

  /**
   * CSS class to add to the close button on the AR modal.
   * If none is provided, a default inline style is added.
   * Default: none
   */
  closeButtonClassName?: string;

  /**
   * Content to add to the close button. If the content is a string, it is added as `.innerHTML`
   * if it's a DOM element, it is added as `.appendChild()`.
   * Default: `"Close"`
   */
  closeButtonContent?: string | HTMLElement;

  /**
   * CSS class to add to the AR button on the AR modal.
   * If none is provided, a default inline style is added.
   * Default: none
   */
  arButtonClassName?: string;

  /**
   * Content to add to the AR button. If the content is a string, it is added as `.innerHTML`
   * if it's a DOM element, it is added as `.appendChild()`.
   * Default: `"Close"`
   */
  arButtonContent?: string | HTMLElement;

  /**
   * Color of the 3D model edges.
   * Default: `"#0eaeff"` (grayish teal)
   */
  edgeColor?: string;
};

const defaultOptionValues: MaptilerARControlOptions = {
  showButton: true,
  background: "#FFFFFF",
  closeButtonClassName: "",
  arButtonClassName: "",
  closeButtonContent: `<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%"><path d="M480-418.26 282.203-220.463q-12.87 12.869-30.87 12.869t-30.87-12.869q-12.869-12.87-12.869-30.87t12.869-30.87L418.26-480 220.463-677.797q-12.869-12.87-12.869-30.87t12.869-30.87q12.87-12.869 30.87-12.869t30.87 12.869L480-541.74l197.797-197.797q12.87-12.869 30.87-12.869t30.87 12.869q12.869 12.87 12.869 30.87t-12.869 30.87L541.74-480l197.797 197.797q12.869 12.87 12.869 30.87t-12.869 30.87q-12.87 12.869-30.87 12.869t-30.87-12.869L480-418.26Z" style="fill:rgb(68,73,82);"/></svg>`,
  arButtonContent: "Enable AR",
  edgeColor: "#7b8487",
};

const defaultArButtonStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  margin: "35px",
  fontSize: "1.5em",
  width: "fit-content",
  background: "#FFF",
  border: "2px solid #0eaeff",
  borderRadius: "5px",
  padding: "8px 10px",
  color: "#0eaeff",
};

const defaultCloseButtonStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  margin: "10px",
  background: "#FFF",
  border: "none",
  borderRadius: "3px",
  width: "33px",
  height: "33px",
  "box-shadow": "0 0 6px 2px rgb(0 0 0 / 8%)",
};

export class MaptilerARControl extends EventEmitter implements IControl {
  private controlButton!: HTMLButtonElement;
  private controlButtonContainer!: HTMLDivElement;
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

  private threeSceneGLTF!: THREE.Scene;
  private threeSceneUSDZ!: THREE.Scene;
  private threeTileContainerGLTF!: THREE.Object3D;
  private threeTileContainerUSDZ!: THREE.Object3D;
  private gltfMaterial!: THREE.MeshStandardMaterial;
  private usdzMaterial!: THREE.MeshStandardMaterial;
  private mapMeshGLTF!: THREE.Mesh;
  private mapMeshUSDZ!: THREE.Mesh;
  private itemsToDispose: Array<
    | THREE.CanvasTexture
    | THREE.DataTexture
    | THREE.RawShaderMaterial
    | THREE.PlaneGeometry
    | THREE.MeshBasicMaterial
    | THREE.MeshStandardMaterial
  > = [];
  private gltfExporter: GLTFExporter = new GLTFExporter();
  private lock = false;
  private options: MaptilerARControlOptions;
  private arButton: HTMLElement = null;
  private closeButton: HTMLElement = null;
  private modelViewer: ModelViewerElement = null;

  constructor(options: MaptilerARControlOptions = {}) {
    super();

    this.options = {
      ...defaultOptionValues,
      ...options,
    };
  }

  onAdd(map: maplibregl.Map): HTMLElement {
    this.setMap(map as Map);

    // Creation of the button to show on map
    this.controlButtonContainer = window.document.createElement("div");

    if (this.options.showButton) {
      this.controlButtonContainer.className =
        "maplibregl-ctrl maplibregl-ctrl-group";

      this.controlButton = window.document.createElement("button");
      this.controlButton.className = "maptiler-ar-ctrl";
      this.controlButtonContainer.appendChild(this.controlButton);

      const iconSpan = window.document.createElement("span");
      iconSpan.className = "maplibregl-ctrl-icon";
      iconSpan.setAttribute("aria-hidden", "true");
      this.controlButton.appendChild(iconSpan);
      iconSpan.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M22.701,35.306L14.997,30.784C14.621,30.554 14.33,30.251 14.121,29.873C13.913,29.496 13.81,29.091 13.81,28.659L13.81,19.652C13.81,19.22 13.913,18.815 14.121,18.438C14.33,18.061 14.621,17.757 14.997,17.527L22.737,12.925C23.117,12.706 23.537,12.595 23.996,12.595C24.454,12.595 24.874,12.706 25.255,12.925L32.994,17.527C33.37,17.757 33.662,18.061 33.87,18.438C34.078,18.815 34.183,19.22 34.183,19.652L34.183,28.659C34.183,29.091 34.075,29.496 33.861,29.873C33.647,30.251 33.346,30.554 32.959,30.784L25.147,35.306C24.759,35.532 24.348,35.644 23.918,35.644C23.487,35.644 23.081,35.532 22.701,35.306ZM25.073,32.57L31.735,28.582L31.735,20.945L25.073,24.754L25.073,32.57ZM22.918,32.57L22.918,24.754L16.292,20.945L16.292,28.582L22.918,32.57ZM23.996,15.159L17.361,18.97L23.996,22.809L30.631,18.97L23.996,15.159Z" style="fill:rgb(68,73,82);"/>
      </svg>
      `;

      this.controlButton.type = "button";

      this.controlButton.addEventListener("click", async (evt) => {
        this.run();
      });
    }

    this.init3DScene();
    return this.controlButtonContainer;
  }

  async run() {
    try {
      this.close();
    } catch (e) {}

    if (this.lock) return;
    this.lock = true;
    this.emit("computeStart");

    await this.computeTextures();
    const colorData = this.getColorData();
    const terrainData = this.getTerrainData();

    if (!colorData) return;
    if (!terrainData) return;

    await this.buildMapModel();

    this.displayModal();
    // this.emit("computeEnd");
    // this.downloadUSDZ()
    this.lock = false;
  }

  onRemove() {
    this.dispose();
    this.controlButtonContainer.parentNode?.removeChild(
      this.controlButtonContainer
    );
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

    console.log("setting pixel ratio to 4");

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
    const gl = canvas.getContext("webgl2");
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
        `https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${sdkConfig.apiKey}&mtsid=${mtsid}&module=xr`,
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

  init3DScene() {
    this.threeSceneGLTF = new THREE.Scene();

    this.threeTileContainerGLTF = new THREE.Object3D();
    this.threeSceneGLTF.add(this.threeTileContainerGLTF);
    this.threeTileContainerGLTF.rotateX(-Math.PI / 2);

    this.threeSceneUSDZ = new THREE.Scene();
    this.threeTileContainerUSDZ = new THREE.Object3D();
    this.threeSceneUSDZ.add(this.threeTileContainerUSDZ);
    this.threeTileContainerUSDZ.rotateX(-Math.PI / 2);
  }

  private async buildMapModel() {
    if (!this.colorData) throw new Error("Color textures is not ready.");
    if (!this.terrainData) throw new Error("Terrain textures is not ready.");

    // remove a potentially existing map mesh from a previous run
    this.threeTileContainerGLTF.clear();
    this.threeTileContainerUSDZ.clear();

    // Delete all GPU buffers from a previous run
    this.dispose();

    console.time("making canvas");
    const colorCanvas = mapTextureDataToCanvas(this.colorData);
    console.timeEnd("making canvas");

    console.time("tracing borders");
    const ctx = colorCanvas.getContext("2d");

    if (!ctx) throw new Error("Color texture not available");

    // Use a base color and darken it to use on the north/south side
    const baseColor = new THREE.Color(this.options.edgeColor);
    // const darkerColor = baseColor.clone().offsetHSL(0, 0, -0.2);
    const darkerColor = baseColor.clone().multiplyScalar(0.65);
    const evenDarkerColor = baseColor.clone().multiplyScalar(0.5);

    ctx.fillStyle = `#${baseColor.getHexString()}`;
    const thickness =
      Math.ceil(this.colorData.width / this.terrainData.width) * 1.5;

    await addWatermarkToContext(
      ctx,
      thickness * 2,
      Math.max(256, colorCanvas.width / 10)
    );

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
    mapTexture.encoding = THREE.sRGBEncoding;
    mapTexture.encoding = THREE.LinearEncoding;
    mapTexture.needsUpdate = true;
    this.itemsToDispose.push(mapTexture);

    // MeshBasicMaterial has a nice sRGB colorimetry that respects the texture
    // while MeshStandardMaterial looks all washed out and not in par with the original
    // map texcture.
    // iOS/iPadOS Quick Look (XR rendering) require the model to be in the USDZ format and this is only compatible
    // with MeshStandardMaterial.
    // On Android and generaly on WebXR, GLTF/GLB format is working fine and we can use
    // MeshBasicMaterial to get better colors.
    // In the following, we are creating the two material to give us the possibility
    // to swap from one to the other depending on the target platform we are generating the model for.
    // By default, the model must still be in GLTF because Model-Viewer's internal scene
    // expects this format.
    this.gltfMaterial = new THREE.MeshStandardMaterial({
      map: mapTexture,
      color: 0xffffff,
    });

    this.usdzMaterial = new THREE.MeshStandardMaterial({
      map: mapTexture,
    });

    this.itemsToDispose.push(this.gltfMaterial);
    this.itemsToDispose.push(this.usdzMaterial);

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
    this.mapMeshGLTF = new THREE.Mesh(mapGeom, this.gltfMaterial);
    this.mapMeshUSDZ = new THREE.Mesh(mapGeom, this.usdzMaterial);

    // const elevation = terrain8BitData.pixelData;
    const positionBuf = mapGeom.attributes.position.array;

    console.time("Applying elevation");
    const w = this.terrainData.width;
    const h = this.terrainData.height;

    // detecting the minimum elevation
    let minEle = +Infinity;
    for (let i = 0; i < positionBuf.length / 3; i += 1) {
      const r = this.terrainData.pixelData[i * 4];
      const g = this.terrainData.pixelData[i * 4 + 1];
      const b = this.terrainData.pixelData[i * 4 + 2];
      const elevation = -10000 + (r * 256 * 256 + g * 256 + b) * 0.1;
      if (elevation < minEle) {
        minEle = elevation;
      }
    }

    console.log("minEle", minEle);

    // Flooring the minimum elevation to the lower hundred meter
    minEle = Math.max(0, ~~(minEle / 100) * 100 - 100);

    for (let i = 0; i < positionBuf.length / 3; i += 1) {
      const r = this.terrainData.pixelData[i * 4];
      const g = this.terrainData.pixelData[i * 4 + 1];
      const b = this.terrainData.pixelData[i * 4 + 2];
      let elevation = -10000 + (r * 256 * 256 + g * 256 + b) * 0.1 - minEle;

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

    mapGeom.computeVertexNormals();

    console.timeEnd("Applying elevation");

    this.itemsToDispose.push(mapGeom);

    const bottomPlaneGeom = new THREE.PlaneGeometry(
      widthMeter,
      heightMeter,
      1,
      1
    );
    const bottomPlaneMat = new THREE.MeshStandardMaterial({
      color: evenDarkerColor,
    });
    const bottomPlaneMeshGLTF = new THREE.Mesh(bottomPlaneGeom, bottomPlaneMat);
    bottomPlaneMeshGLTF.rotateX(-Math.PI);

    this.itemsToDispose.push(bottomPlaneGeom);
    this.itemsToDispose.push(bottomPlaneMat);

    // Scaling the model so that it occupies ~the same space on screen,
    // regardless of its geographic extent
    // + adding to scene
    const meshWidth = 1; // 1 meter of side in world space
    const ratio = (meshWidth * 1) / widthMeter;
    this.threeTileContainerGLTF.scale.x = ratio;
    this.threeTileContainerGLTF.scale.y = ratio;
    this.threeTileContainerGLTF.scale.z = ratio;
    this.threeTileContainerGLTF.add(this.mapMeshGLTF);
    this.threeTileContainerGLTF.add(bottomPlaneMeshGLTF);

    // The equivalent USDZ scene
    this.threeTileContainerUSDZ.scale.x = ratio;
    this.threeTileContainerUSDZ.scale.y = ratio;
    this.threeTileContainerUSDZ.scale.z = ratio;
    const bottomPlaneMeshUSDZ = bottomPlaneMeshGLTF.clone();
    this.threeTileContainerUSDZ.add(this.mapMeshUSDZ);
    this.threeTileContainerUSDZ.add(bottomPlaneMeshUSDZ);
  }

  private dispose() {
    while (this.itemsToDispose.length) {
      const itemToDispose = this.itemsToDispose.pop();
      itemToDispose?.dispose();
    }
  }

  private downloadGLTF(binary = false) {
    this.gltfExporter.parse(
      this.threeSceneGLTF,

      // success
      (gltfPayload) => {
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

  private async downloadUSDZ() {
    const blob = await this.getModelBlobUSDZ();

    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);
    link.href = URL.createObjectURL(blob);
    link.download = "maptiler_scene.usdz";
    link.click();
  }

  private async getModelBlobGLB(): Promise<Blob> {
    return new Promise((resolve, reject) => {
      this.gltfExporter.parse(
        this.threeSceneGLTF,

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
    });
  }

  private async getModelBlobUSDZ(): Promise<Blob> {
    const exporter = new USDZExporter();
    const arraybuffer = await exporter.parse(this.threeSceneUSDZ);
    const blob = new Blob([arraybuffer], {
      type: "model/vnd.usdz+zip",
    });

    return blob;
  }

  private async displayModal() {
    if (!typeof window) return;

    const container = this.map.getContainer();

    console.time("Making GLB model");
    const modelBlobGLB = await this.getModelBlobGLB();
    const modelObjectURLGLB = URL.createObjectURL(modelBlobGLB);
    console.timeEnd("Making GLB model");
    this.emit("computeEnd");

    this.modelViewer = new ModelViewerElement();
    this.modelViewer.src = modelObjectURLGLB;

    this.modelViewer.setAttribute("ar", "true");
    this.modelViewer.setAttribute("ar-modes", "webxr quick-look");
    this.modelViewer.setAttribute("camera-controls", "true");
    this.modelViewer.setAttribute("shadow-intensity", "1");
    this.modelViewer.style.width = "100%";
    this.modelViewer.style.height = "100%";
    this.modelViewer.style.zIndex = "3";
    this.modelViewer.style.position = "absolute";
    this.modelViewer.style.background = this.options.background;
    container.appendChild(this.modelViewer);

    this.arButton = document.createElement("button");
    this.arButton.setAttribute("slot", "ar-button");
    this.arButton.id = "maptiler-ar-enable-button";

    // Styling the AR button
    if (this.options.arButtonClassName) {
      this.arButton.classList.add(this.options.arButtonClassName);
    } else {
      Object.keys(defaultArButtonStyle).forEach((el) => {
        this.arButton.style[el] = defaultArButtonStyle[el];
      });
    }

    // Adding content to the AR button
    if (typeof this.options.arButtonContent === "string") {
      this.arButton.innerHTML = this.options.arButtonContent;
    } else {
      this.arButton.appendChild(this.options.arButtonContent);
    }

    this.modelViewer.appendChild(this.arButton);

    this.closeButton = document.createElement("button");
    this.closeButton.id = "maptiler-ar-close-button";

    // Styling the close button
    if (this.options.closeButtonClassName) {
      this.closeButton.classList.add(this.options.closeButtonClassName);
    } else {
      Object.keys(defaultCloseButtonStyle).forEach((el) => {
        this.closeButton.style[el] = defaultCloseButtonStyle[el];
      });
    }

    // Adding content to the close button
    if (typeof this.options.closeButtonContent === "string") {
      this.closeButton.innerHTML = this.options.closeButtonContent;
    } else {
      this.closeButton.appendChild(this.options.closeButtonContent);
    }

    this.modelViewer.appendChild(this.closeButton);

    // this.modelViewer.activateAR();

    this.closeButton.addEventListener("click", async (evt) => {
      this.close();
    });
  }

  close() {
    this.dispose();
    removeDomNode(this.arButton);
    removeDomNode(this.modelViewer);
    removeDomNode(this.closeButton);
  }
}
