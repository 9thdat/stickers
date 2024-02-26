import { call } from '@/services/www'
import { useUserStore } from '@/stores/user'
import { Sticker } from '@/types/sticker'
import { User } from '@/types/user'

type UserResponse = User

type UserRequest = User

type StickerResponse = Sticker
type StickerRequest = Sticker

export function useUser() {
  const store = useUserStore()

  const fetchUser = async (id: string) => {
    const response = await call<any, UserResponse>('get', `/users/${id}`)

    return response
  }

  const createUser = async (user: User) => {
    const response = await call<UserRequest, UserResponse>('post', '/users', user)

    return response
  }

  const updateUserHandle = async (handle: string) => {
    if (!store.user) return

    const response = await call<UserRequest, UserResponse>('put', `/users/${store.user.id}`, {
      ...store.user,
      handle,
    })

    return response
  }

  const createSticker = async (sticker: Sticker) => {
    console.log(sticker)

    const response = await call<StickerRequest, StickerResponse>('post', '/stickers', sticker)

    return response
  }

  return { ...store, fetchUser, createUser, updateUserHandle, createSticker }
}
