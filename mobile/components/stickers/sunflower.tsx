import { IMAGES } from '@/lib/config'
import { Image } from 'expo-image'
import React from 'react'
import Animated from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function Sunflower() {
  return (
    <Animated.View className="absolute -right-6 top-[40%]">
      <Image
        className="h-[300px] w-[300px]"
        source={IMAGES.sunflower}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      />
    </Animated.View>
  )
}
