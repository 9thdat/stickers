import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { Image } from 'expo-image'
import { IMAGES } from '@/lib/config'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface DeleteButtonProps {
  shown: boolean
}

export default function DeleteButton({ shown }: DeleteButtonProps) {
  const bottom = useSharedValue(100)

  useEffect(() => {
    bottom.value = withSpring(shown ? 50 : -100, {
      damping: 50,
      stiffness: 200,
    })
  }, [shown])

  return (
    <Animated.View
      style={{
        bottom,
      }}
      className=" absolute flex w-full items-center justify-between"
    >
      <TouchableOpacity onPress={() => {}} className="h-[70px] w-[120px]">
        <Image
          className="h-full w-full"
          source={IMAGES.trash_bin}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}
