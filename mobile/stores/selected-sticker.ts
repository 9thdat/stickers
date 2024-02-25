import { create } from 'zustand'

interface SelectedStickerState {
  selectedSticker: string
  setSelectedSticker: (selectedSticker: string) => void
}

export const useSelectStickerStore = create<SelectedStickerState>()((set) => ({
  selectedSticker: '',
  setSelectedSticker: (selectedSticker: string) => set(() => ({ selectedSticker })),
}))
