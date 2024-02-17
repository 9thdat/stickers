import { View, Text, TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'

export default function HomePage() {
  return (
    <View className="flex items-center justify-center">
      <Text>index</Text>
      <Link href="/users/123">Users</Link>
      <TouchableOpacity onPress={() => router.push('/t')}>
        <Text>Go to T</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/t/login-google')}>
        <Text>Login W Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/t/zustand')}>
        <Text>Test zustand</Text>
      </TouchableOpacity>
    </View>
  )
}
