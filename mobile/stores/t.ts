import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { STORES } from '@/lib/config'

interface UserState {
  user: string
  setUser: (user: string) => void
}

export const useTStore = create<UserState>()(
  persist(
    (set) => ({
      user: '',
      setUser: (user) => set({ user }),
    }),
    {
      name: STORES.TEST,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
