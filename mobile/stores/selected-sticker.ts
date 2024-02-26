import { create } from 'zustand'

interface Transform {
  position: {
    x: number
    y: number
  }
  rotation: string
  scale: number
}

interface SelectedStickerState {
  selectedSticker: string
  setSelectedSticker: (selectedSticker: string) => void

  transform: Transform
  setTransform: (transform: Transform) => void
}

export const useSelectStickerStore = create<SelectedStickerState>()((set) => ({
  selectedSticker: '',
  setSelectedSticker: (selectedSticker: string) => set(() => ({ selectedSticker })),

  transform: {
    position: {
      x: 0,
      y: 0,
    },
    rotation: '0deg',
    scale: 1,
  },
  setTransform: (transform: Transform) => set(() => ({ transform })),
}))
