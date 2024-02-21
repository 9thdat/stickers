import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function HomePage() {
  return (
    <View className="absolute flex h-screen w-screen items-center justify-center bg-[#fff]">
      <TouchableOpacity onPress={() => router.push('login')}>
        <Text>Go to login</Text>
      </TouchableOpacity>
    </View>
  )
}
