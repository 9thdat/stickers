import { useUser } from '@/hooks/use-user'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function HomePage() {
  const { isAuth } = useUser()

  useEffect(() => {
    if (!isAuth) {
      setTimeout(() => {
        router.replace('/login')
      }, 0)
    } else {
      setTimeout(() => {
        router.replace('/me')
      }, 0)
    }
  }, [isAuth])

  return (
    <View className="absolute flex h-screen w-screen items-center justify-center bg-[#fff]">
      <TouchableOpacity onPress={() => router.push('login')}>
        <Text>Go to login</Text>
      </TouchableOpacity>
    </View>
  )
}
