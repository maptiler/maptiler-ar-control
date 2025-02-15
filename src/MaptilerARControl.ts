// @ts-nocheck

import {
  type Map as MapSDK,
  type LngLatBounds,
  LngLat,
  type IControl,
  math,
} from "@maptiler/sdk";
import { ModelViewerElement } from "@google/model-viewer";
import * as platformConstants from "./platform-constants.ts";

import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";
import { FileOpener } from "@capacitor-community/file-opener";

import EventEmitter from "events";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { USDZExporter } from "three/examples/jsm/exporters/USDZExporter.js";

import { addWatermarkToContext, blobToBase64 } from "./tools";

import { name, version } from "../package.json";

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

function removeDomNode(node: HTMLElement) {
  node.parentNode.removeChild(node);
}

const MIN_TERRAIN_ZOOM = 12;
const TERRAIN_TILE_SIZE = 512;
const MAX_ZOOM = 16;

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
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imageUrl;
    image.onload = () => {
      context.drawImage(image, topLeftPosition[0], topLeftPosition[1]);
      resolve();
    };

    image.onerror = () => {
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
function idleAsync(map: MapSDK) {
  return new Promise<boolean>((myResolve) => {
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

  /**
   * The URL to a logo image to be placed on top of the 3D view (in browser).
   * The image is located by default on the bottom-left corner but this can be changed with
   * the option `.logoClass`.
   * Default: `""` (empty string, no image)
   */
  logo?: string;

  /**
   * Height in pixel of the logo.
   * Default: `60`
   */
  logoHeight?: number;

  /**
   * CSS class to add to the logo image specified with the `.logo` option.
   * If a CSS class is provided, the option `.logoHeight` will be ignored and the class is expected to
   * include instruction about `width` and/or `height`.
   * Default: `""` (empty string, no class spacified)
   */
  logoClass?: string;
  /**
   * When the platform allows, setting this to `true` automatically activates the AR mode as soon as the data is ready.
   * Quick Look on iOS is likely to allow this, while WebXR on Android is not likeley to.
   * Default: `false`
   */
  activateAR?: boolean;

  /**
   * Generate a mesh with a higher resolution texture.
   * Default: `false`
   */
  highRes?: false;
};

const defaultOptionValues: MaptilerARControlOptions = {
  showButton: true,
  background: "#FFFFFF",
  closeButtonClassName: "",
  arButtonClassName: "",
  // closeButtonContent: `<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%"><path d="M480-418.26 282.203-220.463q-12.87 12.869-30.87 12.869t-30.87-12.869q-12.869-12.87-12.869-30.87t12.869-30.87L418.26-480 220.463-677.797q-12.869-12.87-12.869-30.87t12.869-30.87q12.87-12.869 30.87-12.869t30.87 12.869L480-541.74l197.797-197.797q12.87-12.869 30.87-12.869t30.87 12.869q12.869 12.87 12.869 30.87t-12.869 30.87L541.74-480l197.797 197.797q12.869 12.87 12.869 30.87t-12.869 30.87q-12.87 12.869-30.87 12.869t-30.87-12.869L480-418.26Z" style="fill:rgb(68,73,82);"/></svg>`,
  closeButtonContent: `<svg width="100%" height="100%" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,16.6768,6.42373)">
          <path d="M7,13.75C6.737,13.75 6.509,13.653 6.315,13.46C6.122,13.266 6.025,13.038 6.025,12.775L6.025,8.225L1.475,8.225C1.212,8.225 0.984,8.128 0.79,7.935C0.597,7.741 0.5,7.513 0.5,7.25C0.5,6.987 0.597,6.759 0.79,6.565C0.984,6.372 1.212,6.275 1.475,6.275L6.025,6.275L6.025,1.725C6.025,1.462 6.122,1.234 6.315,1.04C6.509,0.847 6.737,0.75 7,0.75C7.263,0.75 7.491,0.847 7.685,1.04C7.878,1.234 7.975,1.462 7.975,1.725L7.975,6.275L12.525,6.275C12.788,6.275 13.016,6.372 13.21,6.565C13.403,6.759 13.5,6.987 13.5,7.25C13.5,7.513 13.403,7.741 13.21,7.935C13.016,8.128 12.788,8.225 12.525,8.225L7.975,8.225L7.975,12.775C7.975,13.038 7.878,13.266 7.685,13.46C7.491,13.653 7.263,13.75 7,13.75Z" style="fill:rgb(68,73,82);fill-rule:nonzero;"/>
      </g>
    </svg>`,
  arButtonContent: `
  <span>
    <svg width="33px" height="33px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2; vertical-align: middle;">
      <g transform="matrix(0.718295,0,0,0.718295,6.75661,6.76523)">
          <path d="M22.197,39.734L11.472,33.439C10.949,33.118 10.543,32.696 10.253,32.171C9.963,31.646 9.819,31.082 9.819,30.48L9.819,17.941C9.819,17.34 9.963,16.776 10.253,16.251C10.543,15.726 10.949,15.303 11.472,14.983L22.247,8.576C22.777,8.27 23.362,8.116 24,8.116C24.638,8.116 25.223,8.27 25.753,8.576L36.528,14.983C37.051,15.303 37.457,15.726 37.747,16.251C38.037,16.776 38.182,17.34 38.182,17.941L38.182,30.48C38.182,31.082 38.032,31.646 37.734,32.171C37.436,32.696 37.017,33.118 36.478,33.439L25.603,39.734C25.062,40.048 24.491,40.205 23.892,40.205C23.292,40.205 22.727,40.048 22.197,39.734ZM22.5,35.925L22.5,25.044L13.275,19.741L13.275,30.373L22.5,35.925ZM25.5,35.925L34.775,30.373L34.775,19.741L25.5,25.044L25.5,35.925ZM3.701,13.426L3.701,7.108C3.701,6.159 4.033,5.353 4.696,4.687C5.359,4.022 6.163,3.689 7.108,3.689L13.426,3.689L13.426,6.976L6.976,6.976L6.976,13.426L3.701,13.426ZM13.426,44.299L7.108,44.299C6.163,44.299 5.359,43.967 4.696,43.304C4.033,42.641 3.701,41.837 3.701,40.892L3.701,34.574L6.976,34.574L6.976,41.024L13.426,41.024L13.426,44.299ZM34.574,44.299L34.574,41.024L41.024,41.024L41.024,34.574L44.311,34.574L44.311,40.892C44.311,41.837 43.978,42.641 43.313,43.304C42.647,43.967 41.841,44.299 40.892,44.299L34.574,44.299ZM41.024,13.426L41.024,6.976L34.574,6.976L34.574,3.689L40.892,3.689C41.841,3.689 42.647,4.022 43.313,4.687C43.978,5.353 44.311,6.159 44.311,7.108L44.311,13.426L41.024,13.426ZM24,22.336L33.237,16.991L24,11.685L14.763,16.991L24,22.336Z" style="fill:rgb(36, 189, 240);fill-rule:nonzero;"/>
      </g>
    </svg>
    <span style="vertical-align: middle;">
    View in your space
    </span>
  </span>`,
  edgeColor: "#7b8487",
  logo: "",
  activateAR: false,
  highRes: false,
};

const defaultArButtonStyle = {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "30px auto",
  fontSize: "1.4em",
  width: "fit-content",
  background: "#FFF",
  border: "1px solid #0000001a",
  borderRadius: "3px",
  padding: "2px 9px 2px 6px",
  color: "#727781",
  "box-shadow": "0 0 6px 2px rgb(0 0 0 / 8%)",
};

const defaultCloseButtonStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  margin: "10px",
  padding: "0px",
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
  private map!: MapSDK;
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
  private logoImgElement: HTMLImageElement = null;
  private logo: string;

  constructor(options: MaptilerARControlOptions = {}) {
    super();

    this.options = {
      ...defaultOptionValues,
      ...options,
    };

    this.logo = options.logo;
  }

  on(evtname: string, cb: () => void) {
    super.on(evtname, cb);
  }

  once(evtname: string, cb: () => void) {
    super.once(evtname, cb);
  }

  off(evtname: string) {
    super.off(evtname);
  }

  onAdd(map: MapSDK): HTMLElement {
    map.telemetry.registerModule(name, version);

    this.setMap(map);

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
      const boxIcon = `
      <svg width="100%" height="100%" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M22.701,35.306L14.997,30.784C14.621,30.554 14.33,30.251 14.121,29.873C13.913,29.496 13.81,29.091 13.81,28.659L13.81,19.652C13.81,19.22 13.913,18.815 14.121,18.438C14.33,18.061 14.621,17.757 14.997,17.527L22.737,12.925C23.117,12.706 23.537,12.595 23.996,12.595C24.454,12.595 24.874,12.706 25.255,12.925L32.994,17.527C33.37,17.757 33.662,18.061 33.87,18.438C34.078,18.815 34.183,19.22 34.183,19.652L34.183,28.659C34.183,29.091 34.075,29.496 33.861,29.873C33.647,30.251 33.346,30.554 32.959,30.784L25.147,35.306C24.759,35.532 24.348,35.644 23.918,35.644C23.487,35.644 23.081,35.532 22.701,35.306ZM25.073,32.57L31.735,28.582L31.735,20.945L25.073,24.754L25.073,32.57ZM22.918,32.57L22.918,24.754L16.292,20.945L16.292,28.582L22.918,32.57ZM23.996,15.159L17.361,18.97L23.996,22.809L30.631,18.97L23.996,15.159Z" style="fill:rgb(68,73,82);"/>
      </svg>
      `;

      const boxIconWithBrackets = `
      <svg width="100%" height="100%" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M22.701,35.306L14.997,30.784C14.621,30.554 14.33,30.251 14.121,29.873C13.913,29.496 13.81,29.091 13.81,28.659L13.81,19.652C13.81,19.22 13.913,18.815 14.121,18.438C14.33,18.061 14.621,17.757 14.997,17.527L22.737,12.925C23.117,12.706 23.537,12.595 23.996,12.595C24.454,12.595 24.874,12.706 25.255,12.925L32.994,17.527C33.37,17.757 33.662,18.061 33.87,18.438C34.078,18.815 34.183,19.22 34.183,19.652L34.183,28.659C34.183,29.091 34.075,29.496 33.861,29.873C33.647,30.251 33.346,30.554 32.959,30.784L25.147,35.306C24.759,35.532 24.348,35.644 23.918,35.644C23.487,35.644 23.081,35.532 22.701,35.306ZM25.073,32.57L31.735,28.582L31.735,20.945L25.073,24.754L25.073,32.57ZM22.918,32.57L22.918,24.754L16.292,20.945L16.292,28.582L22.918,32.57ZM23.996,15.159L17.361,18.97L23.996,22.809L30.631,18.97L23.996,15.159Z" style="fill:rgb(68,73,82);"/>
        <g transform="matrix(0.712957,0,0,0.712957,6.88903,6.88903)">
            <path d="M13.45,44L7,44C6.175,44 5.469,43.706 4.881,43.119C4.294,42.531 4,41.825 4,41L4,34.55L7,34.55L7,41L13.45,41L13.45,44Z" style="fill:rgb(68,73,82);"/>
        </g>
        <g transform="matrix(0.712957,0,0,0.712957,6.88903,6.88903)">
            <path d="M34.55,44L34.55,41L41,41L41,34.55L44,34.55L44,41C44,41.825 43.706,42.531 43.119,43.119C42.531,43.706 41.825,44 41,44L34.55,44Z" style="fill:rgb(68,73,82);"/>
        </g>
        <g transform="matrix(0.712957,0,0,0.712957,6.88903,6.88903)">
            <path d="M4,13.45L4,7C4,6.175 4.294,5.469 4.881,4.881C5.469,4.294 6.175,4 7,4L13.45,4L13.45,7L7,7L7,13.45L4,13.45Z" style="fill:rgb(68,73,82);"/>
        </g>
        <g transform="matrix(0.712957,0,0,0.712957,6.88903,6.88903)">
            <path d="M41,13.45L41,7L34.55,7L34.55,4L41,4C41.825,4 42.531,4.294 43.119,4.881C43.706,5.469 44,6.175 44,7L44,13.45L41,13.45Z" style="fill:rgb(68,73,82);"/>
        </g>
      </svg>
      `;

      iconSpan.innerHTML =
        this.options.activateAR &&
        (platformConstants.IS_AR_QUICKLOOK_CANDIDATE ||
          platformConstants.IS_WEBXR_AR_CANDIDATE)
          ? boxIconWithBrackets
          : boxIcon;

      this.controlButton.type = "button";

      this.controlButton.addEventListener("click", async () => {
        this.run();
      });
    }

    this.init3DScene();
    return this.controlButtonContainer;
  }

  async run() {
    try {
      this.close();
    } catch (e) {
      // empty block
    }

    if (this.lock) return;
    this.lock = true;
    this.emit("computeStart");

    await this.computeTextures();
    const colorData = this.getColorData();
    const terrainData = this.getTerrainData();

    if (!colorData) return;
    if (!terrainData) return;

    await this.buildMapModel();

    if (Capacitor.getPlatform() === "ios") {
      this.runNative();
    } else {
      this.runMobile();
    }

    this.lock = false;
  }

  onRemove() {
    this.dispose();
    this.controlButtonContainer.parentNode?.removeChild(
      this.controlButtonContainer
    );
  }

  setMap(m: MapSDK) {
    this.map = m;
  }

  private getMeterPerPixelCenter(): number {
    return this.meterPerPixelCenter;
  }

  private getColorData(): MapTextureData | null {
    return this.colorData;
  }

  private getLandMaskData(): MapTextureData | null {
    return this.landMaskData;
  }

  private getTerrainData(): MapTextureData | null {
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
    // this.map.setPixelRatio(this.originalPixelRatio);
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

    // this.map.setPixelRatio(4);
    this.map.triggerRepaint();

    const topViewCameraSettings = {
      center: this.cameraSettings.center,
      zoom: Math.min(this.cameraSettings.zoom, MAX_ZOOM),
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
  private async computeColorData() {
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

    const tileIndexTopLeftArr = math.wgs84ToTileIndex(
      [west, north],
      zoom,
      false
    );
    const tileIndexTopLeft = {
      x: tileIndexTopLeftArr[0],
      y: tileIndexTopLeftArr[1],
    } as TileIndex2D;

    const tileIndexTopLeftFloored = {
      x: Math.floor(tileIndexTopLeft.x),
      y: Math.floor(tileIndexTopLeft.y),
    };

    const tileIndexBottomRightArr = math.wgs84ToTileIndex(
      [east, south],
      zoom,
      false
    );
    const tileIndexBottomRight = {
      x: tileIndexBottomRightArr[0],
      y: tileIndexBottomRightArr[1],
    } as TileIndex2D;
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

  private async computeTextures() {
    const originalPixelRatio = this.map.getPixelRatio();

    if (this.options.highRes) {
      this.map.setPixelRatio(4);
    }

    // Set the view from top and axis-aligned
    this.enableTopView();
    await this.computeColorData();
    await this.computeTerrainData();

    if (!this.colorData) throw new Error("The color texture is invalid.");

    // Compute the resolution in meter per pixel
    this.mapCaptureBounds = this.map.getBounds();
    const center = this.mapCaptureBounds.getCenter();
    const middleWest = new LngLat(this.mapCaptureBounds.getWest(), center.lat);
    const middleEast = new LngLat(this.mapCaptureBounds.getEast(), center.lat);
    const distance = middleEast.distanceTo(middleWest);
    this.meterPerPixelCenter = distance / this.colorData?.width;

    if (this.options.highRes) {
      this.map.setPixelRatio(originalPixelRatio);
    }

    // Set the camera back to normal
    this.restoreMapSettings();

    // Wait for the map to be fully loaded on the original camera settings
    await idleAsync(this.map);
  }

  private init3DScene() {
    this.threeSceneGLTF = new THREE.Scene();
    this.threeTileContainerGLTF = new THREE.Object3D();
    this.threeSceneGLTF.add(this.threeTileContainerGLTF);
    this.threeTileContainerGLTF.rotation.set(-Math.PI / 2, 0, 0);

    this.threeSceneUSDZ = new THREE.Scene();
    this.threeTileContainerUSDZ = new THREE.Object3D();
    this.threeSceneUSDZ.add(this.threeTileContainerUSDZ);
    this.threeTileContainerUSDZ.rotation.set(-Math.PI / 2, 0, 0);
  }

  private async buildMapModel() {
    if (!this.colorData) throw new Error("Color textures is not ready.");
    if (!this.terrainData) throw new Error("Terrain textures is not ready.");

    // remove a potentially existing map mesh from a previous run
    this.threeTileContainerGLTF.clear();
    this.threeTileContainerUSDZ.clear();

    // Delete all GPU buffers from a previous run
    this.dispose();
    const colorCanvas = mapTextureDataToCanvas(this.colorData);
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

    const mapTexture = new THREE.CanvasTexture(colorCanvas);
    mapTexture.flipY = false;

    // @ts-ignore
    mapTexture.colorSpace = THREE.SRGBColorSpace; // for some reason, the TS types do not mention this
    // mapTexture.colorSpace = THREE.sRGBEncoding;
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

    // The bounds:
    //
    // A-----B-----C   If the width (in meter) is computed from G to I, like it used to be the case,
    // |           |   then if the bound is wider than 180° the .distanceTo() will return the distance
    // |           |   on the back of Earth, as it is the shortest and the one retrieved by Haversine.
    // D     E     F
    // |           |   One solution is to compute the distance of the bound along the longitude axis
    // |           |   as it is displayed is to compute D.distanceTo(E) + E.distanceTo(F)
    // G-----H-----I

    // We will leverage the fact that the bounds are put axis-aligned earlier in the plugin so that D.lat is E.lat
    const d = new LngLat(bounds.getWest(), bounds.getCenter().lat);
    const e = bounds.getCenter();
    const f = new LngLat(bounds.getEast(), bounds.getCenter().lat);

    const widthMeter = d.distanceTo(e) + e.distanceTo(f);
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
    const w = this.terrainData.width;
    const h = this.terrainData.height;

    // detecting the minimum elevation
    let minEle = Number.POSITIVE_INFINITY;
    for (let i = 0; i < positionBuf.length / 3; i += 1) {
      const r = this.terrainData.pixelData[i * 4];
      const g = this.terrainData.pixelData[i * 4 + 1];
      const b = this.terrainData.pixelData[i * 4 + 2];
      const elevation = -10000 + (r * 256 * 256 + g * 256 + b) * 0.1;
      if (elevation < minEle) {
        minEle = elevation;
      }
    }

    const almostMaxZoom = MAX_ZOOM - 1;
    const z = Math.min(this.map.getZoom(), almostMaxZoom);
    minEle = minEle - (50 * (z - almostMaxZoom) ** 2 + 30);

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

  // Export warning!
  // This function should not be used.
  // Saving model and self-hosting is illegal and against MapTiler Terms https://www.maptiler.com/terms/
  downloadGLTF(binary = false) {
    this.threeTileContainerGLTF.updateMatrix();
    this.threeTileContainerGLTF.updateMatrixWorld();
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
        console.warn("error:", err);
      },

      // options
      {
        binary: binary,
        maxTextureSize: 8192,
      }
    );
  }

  // Export warning!
  // This function should not be used.
  // Saving model and self-hosting is illegal and against MapTiler Terms https://www.maptiler.com/terms/
  async downloadUSDZ() {
    this.threeTileContainerUSDZ.updateMatrix();
    this.threeTileContainerUSDZ.updateMatrixWorld();
    const blob = await this.getModelBlobUSDZ();

    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);
    link.href = URL.createObjectURL(blob);
    link.download = "maptiler_scene.usdz";
    link.click();
  }

  // Export warning!
  // This function should not be used.
  // Saving model and self-hosting is illegal and against MapTiler Terms https://www.maptiler.com/terms/
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

  // Export warning!
  // This function should not be used.
  // Saving model and self-hosting is illegal and against MapTiler Terms https://www.maptiler.com/terms/
  private async getModelBlobUSDZ(): Promise<Blob> {
    const exporter = new USDZExporter();
    const arraybuffer = await exporter.parse(this.threeSceneUSDZ, {
      maxTextureSize: 8192,
    });
    const blob = new Blob([arraybuffer], {
      type: "model/vnd.usdz+zip",
    });

    return blob;
  }

  private async runNative() {
    this.threeTileContainerUSDZ.updateMatrix();
    this.threeTileContainerUSDZ.updateMatrixWorld();
    const blob = await this.getModelBlobUSDZ();
    const b64 = await blobToBase64(blob);

    // Write the file in cache
    const info = await Filesystem.writeFile({
      path: "some_mesh.usdz",
      directory: Directory.Cache,
      data: b64,
    });

    // Open the file wirtten in cache
    await FileOpener.open({
      filePath: info.uri,
      contentType: "model/vnd.usdz+zip",
      openWithDefault: true,
    });

    this.emit("computeEnd");
  }

  private async runMobile() {
    if (typeof window === "undefined") return;

    const container = this.map.getContainer();
    const modelBlobGLB = await this.getModelBlobGLB();
    const modelObjectURLGLB = URL.createObjectURL(modelBlobGLB);

    this.modelViewer = new ModelViewerElement();
    this.modelViewer.src = modelObjectURLGLB;
    this.modelViewer.setAttribute("ar", "true");
    this.modelViewer.setAttribute("tone-mapping", "commerce");
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
      for (const el of Object.keys(defaultArButtonStyle)) {
        this.arButton.style[el] = defaultArButtonStyle[el];
      }
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
      for (const el of Object.keys(defaultCloseButtonStyle)) {
        this.closeButton.style[el] = defaultCloseButtonStyle[el];
      }
    }

    // Adding content to the close button
    if (typeof this.options.closeButtonContent === "string") {
      this.closeButton.innerHTML = this.options.closeButtonContent;
    } else {
      this.closeButton.appendChild(this.options.closeButtonContent);
    }

    this.modelViewer.appendChild(this.closeButton);

    this.closeButton.addEventListener("click", async () => {
      this.close();
    });

    // Adding the attribution
    const attribDiv = this.createAttributionElement();
    if (attribDiv) {
      this.modelViewer.appendChild(attribDiv);
    }

    // Adding a logo image
    if (this.logo) {
      this.logoImgElement = document.createElement("img");
      this.logoImgElement.src = this.logo;

      if (this.options.logoClass) {
        this.logoImgElement.classList.add(this.options.logoClass);
      } else {
        this.logoImgElement.style.setProperty("position", "absolute");
        this.logoImgElement.style.setProperty(
          "height",
          `${this.options.logoHeight ?? 60}px`
        );
        this.logoImgElement.style.setProperty("width", "auto");
        this.logoImgElement.style.setProperty("bottom", "0");
        this.logoImgElement.style.setProperty("left", "0");
        this.logoImgElement.style.setProperty("bottom", "0");
        this.logoImgElement.style.setProperty("margin", "10px");
      }

      this.modelViewer.appendChild(this.logoImgElement);
    }

    // Automatically run the AR
    let successfullyEnabledAR = false;
    if (this.options.activateAR) {
      // Wait for Model Viewer to be ready
      this.modelViewer.addEventListener("load", async () => {
        if (this.modelViewer.canActivateAR) {
          try {
            await this.modelViewer.activateAR();
            successfullyEnabledAR = true;
            // Waiting a sec before fireing event because Quicklook takes some time to start
            setTimeout(() => this.emit("computeEnd"), 1000);
          } catch (e) {
            console.warn("AR to be automatically activated but failed.");
            this.emit("computeEnd");
          }
        } else {
          console.warn("AR cannot be automatically activated.");
          this.emit("computeEnd");
        }
      });
    } else {
      this.emit("computeEnd");
    }

    this.modelViewer.addEventListener(
      "camera-change",
      (e: CustomEvent<CameraChangeDetails>) => {
        // If AR was successfully enabled, then such event is fired when coming back to
        // Mode Viewer 3D view, and auto activate AR also mean going back straight to SDK view
        // without showing MV in between
        if (successfullyEnabledAR && e.detail.source === "automatic") {
          this.close();
        }
      }
    );
  }

  close() {
    this.dispose();
    removeDomNode(this.arButton);
    removeDomNode(this.modelViewer);
    removeDomNode(this.closeButton);

    if (this.logoImgElement) {
      removeDomNode(this.logoImgElement);
    }
  }

  /**
   * Update the `src` property of the logo image
   */
  updateLogo(src: string) {
    if (this.logoImgElement) {
      this.logo = src;
      this.logoImgElement.src = src;
    }
  }

  private createAttributionElement(): HTMLDivElement | null {
    // We are looking for an attribution control, and use its html content
    const attribHTML = this.map._controls
      .filter((c) => c._attribHTML)
      .map((c) => c._attribHTML);
    if (!attribHTML.length) return null;

    const attribDiv = document.createElement("div") as HTMLDivElement;
    attribDiv.innerHTML = attribHTML[0];
    attribDiv.style.setProperty(
      "font-family",
      "12px / 20px Helvetica Neue, Arial, Helvetica, sans-serif"
    );
    attribDiv.style.setProperty("position", "absolute");
    attribDiv.style.setProperty("bottom", 0);
    attribDiv.style.setProperty("right", 0);
    attribDiv.style.setProperty("width", "fit-content");
    attribDiv.style.setProperty("height", "fit-content");
    attribDiv.style.setProperty("padding", "1px 4px");
    attribDiv.style.setProperty("font-size", "12px");
    attribDiv.style.setProperty("background", "#FFFFFF80");

    const links = attribDiv.getElementsByTagName("a");
    for (const link of links) {
      link.style.setProperty("color", "#000000");
      link.style.setProperty("text-decoration", "none");
    }

    return attribDiv;
  }
}
