/// <reference types="node" />
import { Map, LngLatBounds, IControl } from "@maptiler/sdk";
import EventEmitter from "events";
type MapTextureData = {
    width: number;
    height: number;
    pixelData: Uint8Array;
    bounds: LngLatBounds;
};
export declare function mapTextureDataToCanvas(mtd: MapTextureData): HTMLCanvasElement;
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
};
export declare class MaptilerARControl extends EventEmitter implements IControl {
    private controlButton;
    private controlButtonContainer;
    private map;
    private colorData;
    private landMaskData;
    private terrainData;
    private cameraSettings;
    private hasTerrain;
    private terrainExaggeration;
    private terrainSourceID;
    private meterPerPixelCenter;
    private originalPixelRatio;
    private mapCaptureBounds;
    private threeSceneGLTF;
    private threeSceneUSDZ;
    private threeTileContainerGLTF;
    private threeTileContainerUSDZ;
    private gltfMaterial;
    private usdzMaterial;
    private mapMeshGLTF;
    private mapMeshUSDZ;
    private itemsToDispose;
    private gltfExporter;
    private lock;
    private options;
    private arButton;
    private closeButton;
    private modelViewer;
    private logoImgElement;
    constructor(options?: MaptilerARControlOptions);
    onAdd(map: maplibregl.Map): HTMLElement;
    run(): Promise<void>;
    onRemove(): void;
    setMap(m: Map): void;
    private getMeterPerPixelCenter;
    private getColorData;
    private getLandMaskData;
    private getTerrainData;
    private saveMapSettings;
    private restoreMapSettings;
    private enableTopView;
    private grabGlData;
    /**
     * Compute the color data (pixels values + metadata) for the vieport map
     */
    private computeColorData;
    /**
     * Compute the color data (pixels values + metadata) for the vieport map
     */
    private computeLandMaskData;
    private computeTerrainData_VIEWPORT;
    private computeTerrainData;
    private computeTextures;
    private init3DScene;
    private buildMapModel;
    private dispose;
    downloadGLTF(binary?: boolean): void;
    downloadUSDZ(): Promise<void>;
    private getModelBlobGLB;
    private getModelBlobUSDZ;
    private displayModal;
    close(): void;
    /**
     * Update the `src` property of the logo image
     */
    updateLogo(src: string): void;
}
export {};
