import { useSelectSticker } from '@/hooks/use-selected-sticker'
import useStage from '@/hooks/use-stage'
import { IMAGES } from '@/lib/config'
import { computeStickerURI } from '@/lib/utils'
import { Image } from 'expo-image'
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface NewStickerProps {
  image: string
}

export default function NewSticker({ image }: NewStickerProps) {
  const scale = useSharedValue(1)
  const savedScale = useSharedValue(1)
  const offset = useSharedValue({
    x: 0,
    y: 0,
  })
  const start = useSharedValue({ x: 0, y: 0 })
  const rotation = useSharedValue(0)
  const savedRotation = useSharedValue(0)

  const { setStage } = useStage()
  const { setSelectedSticker, setTransform, selectedSticker } = useSelectSticker()

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
        { rotateZ: `${(rotation.value / Math.PI) * 180}deg` },
      ],
    }
  })

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale
    })
    .onEnd(() => {
      savedScale.value = scale.value

      runOnJS(setTransform)({
        position: offset.value,
        rotation: (rotation.value / Math.PI) * 180,
        scale: scale.value,
      })
    })

  const panGesture = Gesture.Pan()
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

      runOnJS(setTransform)({
        position: offset.value,
        rotation: (rotation.value / Math.PI) * 180,
        scale: scale.value,
      })
    })

  const rotationGesture = Gesture.Rotation()
    .onUpdate((e) => {
      rotation.value = savedRotation.value + e.rotation
    })
    .onEnd(() => {
      savedRotation.value = rotation.value

      runOnJS(setTransform)({
        position: offset.value,
        rotation: (rotation.value / Math.PI) * 180,
        scale: scale.value,
      })
    })

  const composed = Gesture.Simultaneous(pinchGesture, panGesture, rotationGesture)

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[animatedStyles]} className="h-[100px] w-[100px] bg-slate-400">
        <View>
          {image ? (
            <Image
              className="h-full w-full"
              style={{ transformOrigin: 'center' }}
              source={computeStickerURI(image)}
              placeholder={blurhash}
              contentFit="contain"
              transition={200}
            />
          ) : (
            <Image
              className="h-full w-full"
              style={{ transformOrigin: 'center' }}
              source={IMAGES.ga}
              placeholder={blurhash}
              contentFit="contain"
              transition={200}
            />
          )}
        </View>
      </Animated.View>
    </GestureDetector>
  )
}
