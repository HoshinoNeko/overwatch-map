import create from 'zustand';

interface MapState {
    language: string;
    selectedMapId: string | null;
    hoveredMarkerId: string | null;
    modalOpen: boolean;
    screenshotUrl: string | null;
    setLanguage: (lang: string) => void;
    setSelectedMapId: (mapId: string | null) => void;
    setHoveredMarkerId: (markerId: string | null) => void;
    openModal: () => void;
    closeModal: () => void;
    setScreenshotUrl: (url: string | null) => void;
}

const useMapStore = create<MapState>((set) => ({
    language: 'en',
    selectedMapId: null,
    hoveredMarkerId: null,
    modalOpen: false,
    screenshotUrl: null,
    setLanguage: (lang) => set({ language: lang }),
    setSelectedMapId: (mapId) => set({ selectedMapId: mapId }),
    setHoveredMarkerId: (markerId) => set({ hoveredMarkerId: markerId }),
    openModal: () => set({ modalOpen: true }),
    closeModal: () => set({ modalOpen: false }),
    setScreenshotUrl: (url) => set({ screenshotUrl: url }),
}));

export default useMapStore;