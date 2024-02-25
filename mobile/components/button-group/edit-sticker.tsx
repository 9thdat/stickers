import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { Image } from 'expo-image'
import { IMAGES } from '@/lib/config'
import useStage from '@/hooks/use-stage'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface EditStickerButtonGroupProps {
  shown: boolean
}

export default function EditStickerButtonGroup({ shown }: EditStickerButtonGroupProps) {
  const bottom = useSharedValue(0)
  const opacity = useSharedValue(0)
  const { setStage } = useStage()

  useEffect(() => {
    bottom.value = withSpring(shown ? 0 : -150, {
      damping: 20,
      stiffness: 200,
    })

    opacity.value = withSpring(shown ? 1 : 0, {
      damping: 20,
      stiffness: 200,
    })
  }, [shown])

  return (
    <Animated.View
      style={{
        bottom,
        opacity,
      }}
      className=" absolute bottom-[-150px] flex w-full flex-row items-center justify-between p-9 px-9"
    >
      <View className="relative h-[70px] w-[100px]">
        <Image
          className="h-full w-full"
          source={IMAGES.trash_bin}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <TouchableOpacity onPress={() => setStage('normal')} className="h-100px] w-[100px]">
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
