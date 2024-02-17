import { View, Text } from 'react-native'
import { Link } from 'expo-router'

export default function HomePage() {
  return (
    <View>
      <Text>index</Text>
      <Link href="/users/123">Users</Link>
    </View>
  )
}
