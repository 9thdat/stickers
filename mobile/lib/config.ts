import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'

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
  webClientId: '7034554027-fbqs0c1bj1ieoru6e7pvnl97gpagk9a1.apps.googleusercontent.com',
})

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
}
