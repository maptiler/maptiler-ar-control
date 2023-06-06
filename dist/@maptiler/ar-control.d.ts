import { IControl, Map, LngLatBounds } from '@maptiler/sdk';
import EventEmitter from 'events';

declare type MapTextureData = {
    width: number;
    height: number;
    pixelData: Uint8Array;
    bounds: LngLatBounds;
};
declare function mapTextureDataToCanvas(mtd: MapTextureData): HTMLCanvasElement;
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
    constructor(map?: Map | null);
    onAdd(map: maplibregl.Map): HTMLElement;
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
}

export { MaptilerARControl, mapTextureDataToCanvas };
