import { useSelectSticker } from '@/hooks/use-selected-sticker'
import useStage from '@/hooks/use-stage'
import { IMAGES } from '@/lib/config'
import { computeStickerURI } from '@/lib/utils'
import { Image } from 'expo-image'
import { Gesture, GestureDetector, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface EditableStickerProps {
  image: string
}

export default function EditableSticker({ image }: EditableStickerProps) {
  const scale = useSharedValue(1)
  const savedScale = useSharedValue(1)
  const offset = useSharedValue({ x: 0, y: 0 })
  const start = useSharedValue({ x: 0, y: 0 })
  const rotation = useSharedValue(1)
  const savedRotation = useSharedValue(1)

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
    .enabled(image === selectedSticker)
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale
      console.log(e.velocity)
    })
    .onEnd(() => {
      savedScale.value = scale.value

      runOnJS(setTransform)({
        position: offset.value,
        rotation: `${(rotation.value / Math.PI) * 180}deg`,
        scale: scale.value,
      })
    })

  const panGesture = Gesture.Pan()
    .enabled(image === selectedSticker)
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
        rotation: `${(rotation.value / Math.PI) * 180}deg`,
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
        rotation: `${(rotation.value / Math.PI) * 180}deg`,
        scale: scale.value,
      })
    })

  const selectSticker = async () => {
    setSelectedSticker(image)
    setStage('editing')
  }

  const composed = Gesture.Simultaneous(pinchGesture, panGesture, rotationGesture)

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[animatedStyles]} className="h-[150px] w-[150px]">
        <TouchableOpacity activeOpacity={1} onPress={selectSticker}>
          {image ? (
            <Image
              className="h-[150px] w-[150px]"
              style={{ transformOrigin: 'center' }}
              source={computeStickerURI(image)}
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
