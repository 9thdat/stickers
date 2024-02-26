import { IMAGES } from '@/lib/config'
import { Image } from 'expo-image'
import React, { useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface MyActionsProps {
  shown: boolean
  pickImage: () => void
}

export default function MyActionButtonGroup({ shown, pickImage }: MyActionsProps) {
  const bottom = useSharedValue(100)

  useEffect(() => {
    bottom.value = withSpring(shown ? 0 : -150, {
      damping: 20,
      stiffness: 200,
    })
  }, [shown])

  return (
    <Animated.View
      style={{
        bottom,
      }}
      className=" absolute  bottom-0 flex w-full flex-row items-center justify-between p-9 px-6"
    >
      <View className="relative h-[80px] w-[100px]">
        <Image
          className="h-full w-full"
          source={IMAGES.friends}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
        {/* <View className="absolute left-0 top-0 flex items-center justify-center px-2">
          <View className="aspect-square w-[25px] scale-x-[1.5] rounded-[50px] bg-red-600" />
          <Text style={{ fontFamily: 'Knewave' }} className="absolute scale-x-[1] text-white">
            99
          </Text>
        </View> */}
      </View>
      <TouchableOpacity onPress={pickImage} className="h-[70px] w-[90px]">
        <Image
          className="h-full w-full"
          source={IMAGES.camera}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}
