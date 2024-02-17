import React from 'react'
import { Button, View } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],
  webClientId: '7034554027-fbqs0c1bj1ieoru6e7pvnl97gpagk9a1.apps.googleusercontent.com',
})

export default function Page() {
  const signIn = async () => {
    try {
      console.log('signing in')

      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()

      console.log(userInfo)
    } catch (error) {
      console.log(error)

      // if (isErrorWithCode(error)) {
      //   switch (error.code) {
      //     case statusCodes.NO_SAVED_CREDENTIAL_FOUND:
      //       // no saved credential found, try creating an account
      //       break;
      //     case statusCodes.SIGN_IN_CANCELLED:
      //       // sign in was cancelled
      //       break;
      //     case statusCodes.ONE_TAP_START_FAILED:
      //       // Android and Web only, you probably have hit rate limiting. You can still call the original Google Sign In API in this case.
      //       break;
      //     default:
      //     // something else happened
      //   }
      // } else {
      //   // an error that's not related to google sign in occurred
      // }
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button title="Google Sign-In" onPress={() => signIn()} />
    </View>
  )
}
