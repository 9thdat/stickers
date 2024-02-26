import { Text, View } from 'react-native'
import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <View className=" flex h-screen w-screen items-center justify-center bg-green-300">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
