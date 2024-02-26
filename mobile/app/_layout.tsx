import 'react-native-gesture-handler'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SWRConfig } from 'swr'
import { AppState } from 'react-native'

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    KnewaveOutline: require('../assets/fonts/Knewave-outline.ttf'),
    Knewave: require('../assets/fonts/Knewave.ttf'),
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SWRConfig
      // value={{
      //   provider: () => new Map(),
      //   isVisible: () => {
      //     return true
      //   },
      //   initFocus(callback) {
      //     let appState = AppState.currentState

      //     const onAppStateChange = (nextAppState: any) => {
      //       /* If it's resuming from background or inactive mode to active one */
      //       if (appState.match(/inactive|background/) && nextAppState === 'active') {
      //         callback()
      //       }
      //       appState = nextAppState
      //     }

      //     // Subscribe to the app state change events
      //     const subscription = AppState.addEventListener('change', onAppStateChange)

      //     return () => {
      //       subscription.remove()
      //     }
      //   },
      // }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </SWRConfig>
    </GestureHandlerRootView>
  )
}
