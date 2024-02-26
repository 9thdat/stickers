import { IMAGES } from '@/lib/config'
import { Image } from 'expo-image'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface NotificationTriggerProps {
  shown: boolean
}

export default function NotificationTrigger({ shown }: NotificationTriggerProps) {
  const rotation = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }))

  useEffect(() => {
    rotation.value = withSpring(shown ? 0 : 60, {
      damping: 50,
      stiffness: 200,
    })
  }, [shown])

  return (
    <Animated.View
      style={[
        {
          transformOrigin: 'bottom right',
        },
        animatedStyle,
      ]}
      className=" absolute right-[-5%]"
    >
      <Image
        className="h-[140px] w-[140px]"
        source={IMAGES.hand_apple}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      />

      {/* <View className="absolute left-[20%] top-[20%] flex items-center justify-center px-2">
        <View className="aspect-square w-[25px] scale-x-[1.2] rounded-[50px] bg-red-600" />
        <Text style={{ fontFamily: 'Knewave' }} className="absolute scale-x-[1] text-white">
          3
        </Text>
      </View> */}
    </Animated.View>
  )
}
