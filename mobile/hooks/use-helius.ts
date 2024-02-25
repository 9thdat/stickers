import React from 'react'
import { Helius } from 'helius-sdk'

export const helius = new Helius(process.env.EXPO_PUBLIC_HELIUS_API_KEY!, 'devnet')

export function useHelius() {
  const mint = async (imageUrl: string) => {}

  return {
    mint,
  }
}
