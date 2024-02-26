import { useSelectSticker } from '@/hooks/use-selected-sticker'
import useStage from '@/hooks/use-stage'
import { IMAGES } from '@/lib/config'
import { computeStickerURI } from '@/lib/utils'
import { Sticker } from '@/types/sticker'
import { Image } from 'expo-image'
import { Gesture, GestureDetector, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface EditableStickerProps {
  sticker: Sticker
}

export default function EditableSticker({ sticker }: EditableStickerProps) {
  const scale = useSharedValue(Number(sticker.scale))
  const savedScale = useSharedValue(Number(sticker.scale))
  const offset = useSharedValue({
    x: Number(sticker.position.split(',')[0]),
    y: Number(sticker.position.split(',')[1]),
  })
  const start = useSharedValue({ x: Number(sticker.position.split(',')[0]), y: Number(sticker.position.split(',')[1]) })
  const rotation = useSharedValue(Number(sticker.rotation))
  const savedRotation = useSharedValue(Number(sticker.rotation))

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
    .enabled(sticker.id === selectedSticker)
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale
    })
    .onEnd(() => {
      savedScale.value = scale.value

      runOnJS(setTransform)({
        position: offset.value,
        rotation: rotation.value,
        scale: scale.value,
      })
    })

  const panGesture = Gesture.Pan()
    .enabled(sticker.id === selectedSticker)
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
        rotation: rotation.value,
        scale: scale.value,
      })
    })

  const rotationGesture = Gesture.Rotation()
    .enabled(sticker.id === selectedSticker)
    .onUpdate((e) => {
      rotation.value = savedRotation.value + e.rotation
    })
    .onEnd(() => {
      savedRotation.value = rotation.value

      runOnJS(setTransform)({
        position: offset.value,
        rotation: rotation.value,
        scale: scale.value,
      })
    })

  const selectSticker = async () => {
    setSelectedSticker(sticker.id)
    setStage('editing')
    setTransform({
      position: { x: Number(sticker.position.split(',')[0]), y: Number(sticker.position.split(',')[1]) },
      rotation: Number(sticker.rotation),
      scale: Number(sticker.scale),
    })
  }

  const composed = Gesture.Simultaneous(pinchGesture, panGesture, rotationGesture)

  return (
    <GestureDetector gesture={composed}>
      <Animated.View
        style={[
          animatedStyles,
          {
            opacity: selectedSticker ? (sticker.id === selectedSticker ? 1 : 0.5) : 1,
          },
        ]}
        className="absolute h-[100px] w-[100px]"
      >
        <TouchableOpacity activeOpacity={1} onPress={selectSticker}>
          {sticker ? (
            <Image
              className="h-full w-full"
              style={{ transformOrigin: 'center' }}
              source={computeStickerURI(sticker.id)}
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
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  )
}
