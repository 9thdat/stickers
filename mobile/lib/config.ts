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
