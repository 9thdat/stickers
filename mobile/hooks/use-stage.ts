import { useStageStore } from '@/stores/stage'
import React from 'react'

export default function useStage() {
  const store = useStageStore()

  return {
    ...store,
  }
}
