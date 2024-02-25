import useStage from '@/hooks/use-stage'
import { useSelectSticker } from '@/hooks/use-selected-sticker'
import { IMAGES } from '@/lib/config'
import { computeStickerURI } from '@/lib/utils'
import { Image } from 'expo-image'
import { useState } from 'react'
import { Text } from 'react-native'
import { Gesture, GestureDetector, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface EditableStickerProps {
  uri: string
}

export default function EditableSticker({ uri }: EditableStickerProps) {
  const scale = useSharedValue(1)
  const savedScale = useSharedValue(1)
  const offset = useSharedValue({ x: 0, y: 0 })
  const start = useSharedValue({ x: 0, y: 0 })
  const { setStage } = useStage()
  const { setSelectedSticker } = useSelectSticker()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value.x, {
            damping: 50,
            stiffness: 200,
          }),
        },
        {
          translateY: withSpring(offset.value.y, {
            damping: 50,
            stiffness: 200,
          }),
        },
        {
          scale: withSpring(scale.value, {
            damping: 50,
            stiffness: 200,
          }),
        },
      ],
    }
  })

  const pinch = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale
    })
    .onEnd(() => {
      savedScale.value = scale.value
    })

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      }
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      }
    })

  const selectSticker = async () => {
    setSelectedSticker(uri)
    setStage('editing')
  }

  const composed = Gesture.Simultaneous(pinch, pan)

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[animatedStyles]} className="h-[150px] w-[150px]">
        <TouchableOpacity activeOpacity={1} onPress={selectSticker}>
          {uri ? (
            <Image
              className="h-[150px] w-[150px]"
              style={{ transformOrigin: 'center' }}
              source={computeStickerURI(uri)}
              placeholder={blurhash}
              contentFit="contain"
              transition={200}
            />
          ) : (
            <Image
              className="h-[150px] w-[150px]"
              style={{ transformOrigin: 'center' }}
              source={IMAGES.ga}
              placeholder={blurhash}
              contentFit="contain"
              transition={200}
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  )
}
