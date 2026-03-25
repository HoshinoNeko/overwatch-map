// src/types/index.ts

// Comprehensive TypeScript type definitions for Overwatch map features

// Game Mode Types
export type GameMode = 'Quick Play' | 'Competitive' | 'Arcade' | 'Custom';

// Marker Types
export interface Marker {
    id: string;
    position: { x: number; y: number; };
    description?: string;
}

// Language Types
export type Language = 'English' | 'Spanish' | 'French' | 'German' | 'Chinese' | 'Korean';

// Health Pack Interface
export interface HealthPack {
    id: string;
    location: { x: number; y: number; };
    healthAmount: number;
}

// Map Configuration Interface
export interface MapConfig {
    name: string;
    gameModes: GameMode[];
    markers: Marker[];
    healthPacks: HealthPack[];
    description?: string;
}

// Example of a map configuration
export const exampleMapConfig: MapConfig = {
    name: 'King’s Row',
    gameModes: ['Quick Play', 'Competitive'],
    markers: [],
    healthPacks: [{ id: 'hp1', location: { x: 123, y: 456 }, healthAmount: 250 }],
    description: 'A popular map set in London.',
};