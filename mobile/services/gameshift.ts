import axios, { type AxiosResponse, isAxiosError, type Method } from 'axios'
import { GAMESHIFT_API_KEY } from '@/lib/constants'

export type GameShiftRequestError = {
  statusCode: number
  message: string
}

export type GameShiftRequestResponse<T> =
  | {
      success: true
      message: T
    }
  | {
      success: false
      message: string
    }

export type UserRequest = {
  referenceId: string
  email: string
}

export type UserResponse = {
  referenceId: string
  address: string
  email: string
}

export type GameShiftUser = UserResponse

const GAMESHIFT_URL = `https://api.gameshift.dev`

export async function call<T, R>(
  method: Method,
  url: string,
  data?: T,
): Promise<GameShiftRequestResponse<AxiosResponse<R>>> {
  try {
    const response: AxiosResponse<R> = await axios(computeGameShiftEndpoint(url), {
      method,
      headers: {
        'content-type': 'application/json',
        'x-api-key': GAMESHIFT_API_KEY,
        accept: 'application/json',
      },
      data,
    })

    return { success: true, message: response }
  } catch (error) {
    if (isAxiosError<GameShiftRequestError>(error)) {
      return { success: false, message: error.response?.data.message ?? 'Unknown error' }
    }

    return { success: false, message: 'Undefined' }
  }
}

function computeGameShiftEndpoint(url: string): string {
  const urlWithoutSlash = url.startsWith('/') ? url.slice(1) : url

  return `${GAMESHIFT_URL}/${urlWithoutSlash}`
}
