import { UserRequest, UserResponse, call } from '@/services/gameshift'

export function useGameShift() {
  const registerUser = async (referenceId: string, email: string) => {
    const response = await call<UserRequest, UserResponse>('post', '/users', {
      referenceId,
      email,
    })

    return response
  }

  const fetchUser = async (referenceId: string) => {
    const response = await call<UserRequest, UserResponse>('get', `/users/${referenceId}`)

    return response
  }

  return { registerUser, fetchUser }
}
