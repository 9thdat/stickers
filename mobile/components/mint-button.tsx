import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { Image } from 'expo-image'
import { IMAGES } from '@/lib/config'
import axios from 'axios'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface MintButtonProps {
  shown: boolean
}

export default function MintButton({ shown }: MintButtonProps) {
  const bottom = useSharedValue(100)

  useEffect(() => {
    bottom.value = withSpring(shown ? 40 : -100, {
      damping: 50,
      stiffness: 200,
    })
  }, [shown])

  const mint = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/mint')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Animated.View
      style={{
        bottom,
      }}
      className=" absolute flex w-full items-center justify-between"
    >
      <TouchableOpacity onPress={mint} className="h-[90px] w-[120px]">
        <Image
          className="h-full w-full"
          source={IMAGES.mint}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}
