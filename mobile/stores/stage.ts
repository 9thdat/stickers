import { User } from '@/types/user'
import { create } from 'zustand'

type Stage = 'normal' | 'editing' | 'picked'

interface StageState {
  stage: Stage
  setStage: (stage: Stage) => void
}

export const useStageStore = create<StageState>()((set) => ({
  stage: 'normal',
  setStage: (stage) => set({ stage }),
}))
