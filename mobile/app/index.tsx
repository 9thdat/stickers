import { useGameShift } from '@/hooks/use-gameshift'
import { useUser } from '@/hooks/use-user'
import { router, useRootNavigationState } from 'expo-router'
import { useEffect } from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'

export default function HomePage() {
  const { isAuth } = useUser()

  const navigationState = useRootNavigationState()

  useEffect(() => {
    if (!navigationState?.key) return

    if (!isAuth) {
      router.replace('/login')
    } else {
      router.replace('/')
    }
  }, [isAuth, navigationState])

  return (
    <View className="absolute flex h-screen w-screen items-center justify-center bg-[#fff]">
      <TouchableOpacity onPress={() => router.push('login')}>
        <Text>Go to login</Text>
      </TouchableOpacity>
    </View>
  )
}
