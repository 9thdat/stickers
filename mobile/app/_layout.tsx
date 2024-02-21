import 'react-native-gesture-handler'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Stack } from 'expo-router'
import React from 'react'
import { useFonts } from 'expo-font'

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    KnewaveOutline: require('../assets/fonts/Knewave-outline.ttf'),
    Knewave: require('../assets/fonts/Knewave.ttf'),
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </GestureHandlerRootView>
  )
}
