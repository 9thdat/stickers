import { useSelectStickerStore } from '@/stores/selected-sticker'

export function useSelectSticker() {
  const store = useSelectStickerStore()

  return {
    ...store,
  }
}
