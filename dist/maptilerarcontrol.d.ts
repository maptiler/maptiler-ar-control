import { IControl, Map, LngLatBounds } from '@maptiler/sdk';
import EventEmitter from 'events';

declare type MapTextureData = {
    width: number;
    height: number;
    pixelData: Uint8Array;
    bounds: LngLatBounds;
};
declare function mapTextureDataToCanvas(mtd: MapTextureData): HTMLCanvasElement;
/**
 * Options for the Maptiler AR Control
 */
declare type MaptilerARControlOptions = {
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
declare class MaptilerARControl extends EventEmitter implements IControl {
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
    constructor(options?: MaptilerARControlOptions);
    onAdd(map: maplibregl.Map): HTMLElement;
    run(): Promise<void>;
    onRemove(): void;
    setMap(m: Map): void;
    getMeterPerPixelCenter(): number;
    getColorData(): MapTextureData | null;
    getLandMaskData(): MapTextureData | null;
    getTerrainData(): MapTextureData | null;
    private saveMapSettings;
    private restoreMapSettings;
    private enableTopView;
    private grabGlData;
    /**
     * Compute the color data (pixels values + metadata) for the vieport map
     */
    computeColorData(): Promise<void>;
    /**
     * Compute the color data (pixels values + metadata) for the vieport map
     */
    private computeLandMaskData;
    private computeTerrainData_VIEWPORT;
    private computeTerrainData;
    computeTextures(): Promise<void>;
    init3DScene(): void;
    private buildMapModel;
    private dispose;
    private downloadGLTF;
    private downloadUSDZ;
    private getModelBlobGLB;
    private getModelBlobUSDZ;
    private displayModal;
    close(): void;
}

export { MaptilerARControl, MaptilerARControlOptions, mapTextureDataToCanvas };
