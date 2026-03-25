// types.ts

export interface MapMarker {
    id: string;
    name: string;
    position: {
        x: number; // X coordinate
        y: number; // Y coordinate
    };
}

export interface OverwatchMap {
    id: string;
    name: string;
    markers: MapMarker[];
}