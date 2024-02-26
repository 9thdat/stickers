import { useStageStore } from '@/stores/stage'

export default function useStage() {
  const store = useStageStore()

  return {
    ...store,
  }
}
