import axios, { type AxiosResponse, isAxiosError, type Method } from 'axios'

export type StickerRequestError = {
  statusCode: number
  message: string
}

export type StickerRequestResponse<T> =
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

export type StickerUser = UserResponse

const STICKER_URL = `http://127.0.0.1:3000/api/v1`

export async function call<T, R>(
  method: Method,
  url: string,
  data?: T,
): Promise<StickerRequestResponse<AxiosResponse<R>>> {
  try {
    const response: AxiosResponse<R> = await axios(computeStickerEndpoint(url), {
      method,
      headers: {
        'content-type': 'application/json',
      },
      data,
    })

    return { success: true, message: response }
  } catch (error) {
    if (isAxiosError<StickerRequestError>(error)) {
      return { success: false, message: error.response?.data.message ?? 'Unknown error' }
    }

    return { success: false, message: 'Undefined' }
  }
}

function computeStickerEndpoint(url: string): string {
  const urlWithoutSlash = url.startsWith('/') ? url.slice(1) : url

  return `${STICKER_URL}/${urlWithoutSlash}`
}
