import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import { Helius } from 'helius-sdk'

export const STORES = {
  USER: 'user',
  TEST: 'test',
}

export const GOOGLE_AUTH_SCOPES = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
]

GoogleSignin.configure({
  scopes: GOOGLE_AUTH_SCOPES,
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID!,
})

export const HELIUS_API_KEY = process.env.EXPO_PUBLIC_HELIUS_API_KEY
export const HELIUS_ENDPOINT = `https://devnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`

export const ROUTES = {
  AUTH: 'auth',
  HANDLE: 'handle',
  HOME: 'home',
}

export const IMAGES = {
  mot_cot_pagoda: require('../assets/stickers/mot-cot-pagoda.png'),
  airpod: require('../assets/stickers/airpod.png'),
  shake_hand: require('../assets/stickers/shake-hand.png'),
  sunflower: require('../assets/stickers/sunflower.png'),
  airplane: require('../assets/stickers/airplane.png'),
  point_hand: require('../assets/stickers/point-hand.png'),
  get_in: require('../assets/stickers/get-in.png'),
  bg_login: require('../assets/stickers/bg-login.png'),
  bg_handle: require('../assets/stickers/bg-handle.png'),
  hydrangea: require('../assets/stickers/hydrangea.png'),
  login_wif_cup: require('../assets/stickers/login-wif-cup.png'),
  capybara_doge: require('../assets/stickers/login-capybara-backpack-doge.png'),
  wood_table: require('../assets/stickers/wood-table.png'),
  cow_rug: require('../assets/stickers/cow-rug.png'),
  you_are: require('../assets/stickers/you-are.png'),
  nheo_fight_ga: require('../assets/stickers/nheo-fight-ga.png'),
  toothlesses: require('../assets/stickers/toothlesses.png'),
  bg_paper_texture: require('../assets/stickers/bg-paper-texture.png'),
  camera: require('../assets/stickers/camera.png'),
  friends: require('../assets/stickers/friends.png'),
  ga: require('../assets/stickers/ga.png'),
  hand_apple: require('../assets/stickers/hand-apple.png'),
  trash_bin: require('../assets/stickers/trash-bin.png'),
  cat_hammer: require('../assets/stickers/cat-hammer.png'),
  mint: require('../assets/stickers/mint.png'),
  nope: require('../assets/stickers/nope.png'),
}
