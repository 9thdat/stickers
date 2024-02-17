import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { STORES } from '@/lib/config'
import { User } from '@/types/user'

interface UserState {
  user: User | null
  setUser: (user: User | null) => void

  updatePartial: (field: keyof User, value: any) => void

  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updatePartial: (field, value) =>
        set((state) => {
          if (state.user) {
            state.user[field] = value
          }

          return {
            ...state,
          }
        }),

      isAuth: false,
      setIsAuth: (isAuth) => set({ isAuth }),
    }),
    {
      name: STORES.USER,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
