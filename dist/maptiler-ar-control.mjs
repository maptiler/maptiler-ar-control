import { LngLat } from '@maptiler/sdk';
import EventEmitter from 'events';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const MIN_TERRAIN_ZOOM = 12;
const TERRAIN_TILE_SIZE = 512;
function latLon2Tile(zoom, lon, lat, round = true) {
  const x = (lon + 180) / 360 * Math.pow(2, zoom);
  const y = (1 - Math.log(
    Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)
  ) / Math.PI) / 2 * Math.pow(2, zoom);
  if (round) {
    return {
      x: Math.floor(x),
      y: Math.floor(y)
    };
  } else {
    return {
      x,
      y
    };
  }
}
function mapTextureDataToCanvas(mtd) {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = mtd.width;
  textureCanvas.height = mtd.height;
  const ctx = textureCanvas.getContext("2d");
  if (!ctx)
    throw new Error("Unable to create a canvas with context.");
  const canvasImageData = ctx.getImageData(0, 0, mtd.width, mtd.height);
  canvasImageData.data.set(mtd.pixelData);
  ctx.putImageData(canvasImageData, 0, 0);
  return textureCanvas;
}
function createMosaic(tileIndexTopLeft, tileIndexBottomRight, zoom, tilesetURLs) {
  return __async(this, null, function* () {
    const nbTileX = tileIndexBottomRight.x - tileIndexTopLeft.x + 1;
    const nbTileY = tileIndexBottomRight.y - tileIndexTopLeft.y + 1;
    const canvas = document.createElement("canvas");
    canvas.width = nbTileX * TERRAIN_TILE_SIZE;
    canvas.height = nbTileY * TERRAIN_TILE_SIZE;
    const context = canvas.getContext("2d");
    if (!context)
      throw new Error("The context is invalid");
    let shiftX = 0;
    let shiftY = 0;
    const promises = [];
    for (let j = tileIndexTopLeft.y; j <= tileIndexBottomRight.y; j += 1) {
      for (let i = tileIndexTopLeft.x; i <= tileIndexBottomRight.x; i += 1) {
        const imageUrlPattern = tilesetURLs[~~(Math.random() * tilesetURLs.length)];
        const imageUrl = imageUrlPattern.replace("{x}", i.toString()).replace("{y}", j.toString()).replace("{z}", zoom.toString());
        promises.push(
          injectToContext(imageUrl, context, [
            shiftX * TERRAIN_TILE_SIZE,
            shiftY * TERRAIN_TILE_SIZE
          ])
        );
        shiftX++;
      }
      shiftX = 0;
      shiftY++;
    }
    yield Promise.all(promises);
    return canvas;
  });
}
function injectToContext(imageUrl, context, topLeftPosition) {
  return new Promise((resolve, _) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imageUrl;
    image.onload = function() {
      context.drawImage(image, topLeftPosition[0], topLeftPosition[1]);
      resolve();
    };
    image.onerror = function() {
      resolve();
    };
  });
}
function cropCanvas(cropPosition, cropSize, inputCanvas) {
  var _a;
  const left = cropPosition[0];
  const top = cropPosition[1];
  const width = cropSize[0];
  const height = cropSize[1];
  const destCanvas = document.createElement("canvas");
  destCanvas.width = width;
  destCanvas.height = height;
  (_a = destCanvas.getContext("2d")) == null ? void 0 : _a.drawImage(
    inputCanvas,
    left,
    top,
    width,
    height,
    0,
    0,
    width,
    height
  );
  return destCanvas;
}
function idleAsync(map) {
  return new Promise(function(myResolve, myReject) {
    map.once("idle", () => {
      myResolve(true);
    });
  });
}
class MaptilerARControl extends EventEmitter {
  constructor(map = null) {
    super();
    this.colorData = null;
    this.landMaskData = null;
    this.terrainData = null;
    this.meterPerPixelCenter = 0;
    this.originalPixelRatio = 0;
    this.itemsToDispose = [];
    this.gltfExporter = new GLTFExporter();
    this.render3D = () => {
      this.threeOrbitControls.update();
      this.threeRenderer.render(this.threeScene, this.threeCamera);
    };
    this.animate = () => {
      this.threeRenderer.setAnimationLoop(this.render3D);
    };
    if (map !== null)
      this.setMap(map);
  }
  setMap(m) {
    this.map = m;
  }
  getMeterPerPixelCenter() {
    return this.meterPerPixelCenter;
  }
  getColorData() {
    return this.colorData;
  }
  getLandMaskData() {
    return this.landMaskData;
  }
  getTerrainData() {
    return this.terrainData;
  }
  saveMapSettings() {
    this.cameraSettings = {
      center: this.map.getCenter(),
      zoom: this.map.getZoom(),
      pitch: this.map.getPitch(),
      bearing: this.map.getBearing()
    };
    this.terrainExaggeration = this.map.getTerrainExaggeration();
    this.hasTerrain = this.map.hasTerrain();
    this.originalPixelRatio = this.map.getPixelRatio();
    if (this.hasTerrain) {
      this.terrainSourceID = this.map.getTerrain().source;
    }
  }
  restoreMapSettings() {
    this.map.setPixelRatio(this.originalPixelRatio);
    this.map.triggerRepaint();
    if (this.hasTerrain) {
      this.map.setTerrain({
        source: this.terrainSourceID,
        exaggeration: this.terrainExaggeration
      });
    }
    this.map.jumpTo(this.cameraSettings);
  }
  enableTopView() {
    this.saveMapSettings();
    if (this.hasTerrain) {
      this.map.setTerrain(null);
    }
    this.map.setPixelRatio(4);
    this.map.triggerRepaint();
    const topViewCameraSettings = {
      center: this.cameraSettings.center,
      zoom: this.cameraSettings.zoom,
      pitch: 0,
      bearing: 0
    };
    this.map.jumpTo(topViewCameraSettings);
  }
  grabGlData() {
    const canvas = this.map.getCanvas();
    const gl = canvas.getContext("webgl");
    if (!gl)
      throw new Error("The WebGL context of the map is undefined");
    const pixels = new Uint8Array(
      gl.drawingBufferWidth * gl.drawingBufferHeight * 4
    );
    gl.readPixels(
      0,
      0,
      gl.drawingBufferWidth,
      gl.drawingBufferHeight,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels
    );
    return {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
      pixelData: pixels,
      bounds: this.map.getBounds()
    };
  }
  computeColorData() {
    return __async(this, null, function* () {
      this.emit("startComputeColorData");
      yield idleAsync(this.map);
      this.colorData = this.grabGlData();
      this.emit("endComputeColorData", {});
    });
  }
  computeLandMaskData() {
    return __async(this, null, function* () {
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
                [-180, -90]
              ]
            ]
          }
        }
      });
      this.map.addLayer({
        id: "xr_module_global_blackout_layer",
        type: "fill",
        source: "xr_module_global_blackout_source",
        layout: {},
        paint: {
          "fill-color": "#000",
          "fill-opacity": 1
        }
      });
      this.map.addSource("xr_module_land_source", {
        type: "vector",
        url: "https://api.maptiler.com/tiles/land/tiles.json?key=bod4IIn9bwK8mnZIk49v"
      });
      this.map.addLayer({
        id: "xr_module_land_layer",
        type: "fill",
        source: "xr_module_land_source",
        "source-layer": "land",
        layout: {},
        paint: {
          "fill-color": "#fff",
          "fill-opacity": 1
        }
      });
      yield idleAsync(this.map);
      this.landMaskData = this.grabGlData();
      this.map.removeLayer("xr_module_global_blackout_layer");
      this.map.removeLayer("xr_module_land_layer");
      this.map.removeSource("xr_module_global_blackout_source");
      this.map.removeSource("xr_module_land_source");
      yield idleAsync(this.map);
      this.emit("endComputeLandMaskData", {});
    });
  }
  computeTerrainData_VIEWPORT() {
    return __async(this, null, function* () {
      this.emit("startComputeTerrainData", {});
      this.map.addSource("xr_module_terrain_source", {
        type: "raster",
        url: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json"
      });
      this.map.addLayer({
        id: "xr_module_terrain_layer",
        source: "xr_module_terrain_source",
        type: "raster",
        minzoom: 0,
        layout: {
          visibility: "visible"
        },
        paint: {
          "raster-opacity": 1
        },
        filter: ["all"]
      });
      yield idleAsync(this.map);
      this.terrainData = this.grabGlData();
      this.map.removeLayer("xr_module_terrain_layer");
      this.map.removeSource("xr_module_terrain_source");
      yield idleAsync(this.map);
      this.emit("endComputeTerrainData", {});
    });
  }
  computeTerrainData() {
    return __async(this, null, function* () {
      var _a;
      this.emit("startComputeTerrainData", {});
      const zoom = Math.min(Math.floor(this.map.getZoom()), MIN_TERRAIN_ZOOM);
      const bounds = this.map.getBounds();
      const north = bounds.getNorth();
      const south = bounds.getSouth();
      const east = bounds.getEast();
      const west = bounds.getWest();
      const tileIndexTopLeft = latLon2Tile(zoom, west, north, false);
      const tileIndexTopLeftFloored = {
        x: Math.floor(tileIndexTopLeft.x),
        y: Math.floor(tileIndexTopLeft.y)
      };
      const tileIndexBottomRight = latLon2Tile(zoom, east, south, false);
      const tileIndexBottomRightFloored = {
        x: Math.floor(tileIndexBottomRight.x),
        y: Math.floor(tileIndexBottomRight.y)
      };
      const sdkConfig = this.map.getSdkConfig();
      const mtsid = this.map.getMaptilerSessionId();
      const terrainCanvas = yield createMosaic(
        tileIndexTopLeftFloored,
        tileIndexBottomRightFloored,
        zoom,
        [
          `https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key=${sdkConfig.apiKey}&mtsid=${mtsid}&module=xr`
        ]
      );
      const offset = [
        Math.floor(
          TERRAIN_TILE_SIZE * (tileIndexTopLeft.x - tileIndexTopLeftFloored.x)
        ),
        Math.floor(
          TERRAIN_TILE_SIZE * (tileIndexTopLeft.y - tileIndexTopLeftFloored.y)
        )
      ];
      const size = [
        Math.ceil(
          TERRAIN_TILE_SIZE * (tileIndexBottomRight.x - tileIndexTopLeft.x)
        ),
        Math.ceil(
          TERRAIN_TILE_SIZE * (tileIndexBottomRight.y - tileIndexTopLeft.y)
        )
      ];
      [
        tileIndexBottomRight.x - tileIndexTopLeft.x,
        tileIndexBottomRight.y - tileIndexTopLeft.y
      ];
      const croppedCanvas = cropCanvas(offset, size, terrainCanvas);
      const pixels = (_a = croppedCanvas.getContext("2d")) == null ? void 0 : _a.getImageData(0, 0, croppedCanvas.width, croppedCanvas.height).data;
      if (!pixels)
        throw new Error("Unable to extract terrain data.");
      this.terrainData = {
        width: croppedCanvas.width,
        height: croppedCanvas.height,
        pixelData: new Uint8Array(pixels.buffer),
        bounds
      };
      this.emit("endComputeTerrainData", {});
    });
  }
  compute() {
    return __async(this, null, function* () {
      var _a;
      this.enableTopView();
      console.time("Compute color texture");
      yield this.computeColorData();
      console.timeEnd("Compute color texture");
      console.time("Compute terrain texture");
      yield this.computeTerrainData();
      console.timeEnd("Compute terrain texture");
      if (!this.colorData)
        throw new Error("The color texture is invalid.");
      this.mapCaptureBounds = this.map.getBounds();
      const center = this.mapCaptureBounds.getCenter();
      const middleWest = new LngLat(this.mapCaptureBounds.getWest(), center.lat);
      const middleEast = new LngLat(this.mapCaptureBounds.getEast(), center.lat);
      const distance = middleEast.distanceTo(middleWest);
      this.meterPerPixelCenter = distance / ((_a = this.colorData) == null ? void 0 : _a.width);
      this.restoreMapSettings();
      yield idleAsync(this.map);
    });
  }
  init3DScene(container) {
    const width = (container == null ? void 0 : container.clientWidth) || 500;
    const height = (container == null ? void 0 : container.clientHeight) || 500;
    this.threeScene = new THREE.Scene();
    this.threeCamera = new THREE.PerspectiveCamera(
      50,
      width / height,
      1e-3,
      1e3
    );
    this.threeCamera.position.set(0, 10, 10);
    this.threeRenderer = new THREE.WebGLRenderer({ antialias: true });
    this.threeRenderer.setClearColor(16777215, 0);
    this.threeRenderer.setPixelRatio(window.devicePixelRatio);
    this.threeRenderer.setSize(width, height);
    if (container) {
      container.appendChild(this.threeRenderer.domElement);
    }
    this.threeOrbitControls = new OrbitControls(
      this.threeCamera,
      this.threeRenderer.domElement
    );
    this.threeTileContainer = new THREE.Object3D();
    this.threeScene.add(this.threeTileContainer);
    this.threeTileContainer.rotateX(-Math.PI / 2);
  }
  buildMapModel() {
    this.threeTileContainer.clear();
    this.dispose();
    const modelData = this.createMapMesh();
    const meshWidth = 10;
    const ratio = meshWidth * 1 / modelData.widthMeter;
    this.threeTileContainer.scale.x = ratio;
    this.threeTileContainer.scale.y = ratio;
    this.threeTileContainer.scale.z = ratio;
    this.threeTileContainer.add(modelData.model);
    console.log("DONE");
  }
  createMapMesh() {
    if (!this.colorData)
      throw new Error("Color textures is not ready.");
    if (!this.terrainData)
      throw new Error("Terrain textures is not ready.");
    console.time("making canvas");
    const colorCanvas = mapTextureDataToCanvas(this.colorData);
    console.timeEnd("making canvas");
    console.log("oioioi");
    console.time("tracing borders");
    const ctx = colorCanvas.getContext("2d");
    if (!ctx)
      throw new Error("Color texture not available");
    const baseColor = new THREE.Color("#7b8487");
    const darkerColor = baseColor.clone().multiplyScalar(0.65);
    ctx.fillStyle = `#${baseColor.getHexString()}`;
    const thickness = Math.ceil(this.colorData.width / this.terrainData.width) * 1.5;
    ctx.fillRect(0, 0, colorCanvas.width - 1, thickness);
    ctx.fillRect(
      0,
      colorCanvas.height - 1 - thickness,
      colorCanvas.width - 1,
      colorCanvas.height - 1
    );
    ctx.fillStyle = `#${darkerColor.getHexString()}`;
    ctx.fillRect(0, 0, thickness, colorCanvas.height - 1);
    ctx.fillRect(
      colorCanvas.width - 1 - thickness,
      0,
      colorCanvas.width - 1,
      colorCanvas.height - 1
    );
    console.timeEnd("tracing borders");
    const mapTexture = new THREE.CanvasTexture(colorCanvas);
    mapTexture.flipY = false;
    mapTexture.colorSpace = THREE.SRGBColorSpace;
    mapTexture.needsUpdate = true;
    this.itemsToDispose.push(mapTexture);
    const material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: mapTexture
    });
    const bounds = this.mapCaptureBounds;
    const widthMeter = bounds.getSouthEast().distanceTo(bounds.getSouthWest());
    const heightMeter = bounds.getSouthEast().distanceTo(bounds.getNorthEast());
    const mapGeom = new THREE.PlaneGeometry(
      widthMeter,
      heightMeter,
      this.terrainData.width - 1,
      this.terrainData.height - 1
    );
    const mapMesh = new THREE.Mesh(mapGeom, material);
    const positionBuf = mapGeom.attributes.position.array;
    console.time("Applying elevation");
    const w = this.terrainData.width;
    const h = this.terrainData.height;
    for (let i = 0; i < positionBuf.length / 3; i += 1) {
      const r = this.terrainData.pixelData[i * 4];
      const g = this.terrainData.pixelData[i * 4 + 1];
      const b = this.terrainData.pixelData[i * 4 + 2];
      let elevation = -1e4 + (r * 256 * 256 + g * 256 + b) * 0.1;
      const xInput = i % w;
      const yInput = ~~(i / w);
      if (xInput === 0 || yInput === 0 || xInput === w - 1 || yInput === h - 1) {
        elevation = 0;
      }
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
      color: 2037010
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
      heightMeter
    };
  }
  dispose() {
    while (this.itemsToDispose.length) {
      const itemToDispose = this.itemsToDispose.pop();
      itemToDispose == null ? void 0 : itemToDispose.dispose();
    }
  }
  export(binary = false) {
    this.gltfExporter.parse(
      this.threeScene,
      (gltfPayload) => {
        console.log(gltfPayload);
        let gltfBlob;
        if (binary) {
          gltfBlob = new Blob([gltfPayload], {
            type: "application/octet-stream"
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
      (err) => {
        console.log("error:", err);
      },
      {
        binary,
        maxTextureSize: 8192
      }
    );
  }
}

export { MaptilerARControl, mapTextureDataToCanvas };
//# sourceMappingURL=maptiler-ar-control.mjs.map
