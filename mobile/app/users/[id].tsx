import React from 'react'
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

export default function User() {
  const scale = useSharedValue(1)
  const savedScale = useSharedValue(1)

  const rotation = useSharedValue(1)
  const savedRotation = useSharedValue(1)

  const rotationGesture = Gesture.Rotation()
    .onUpdate((e) => {
      rotation.value = savedRotation.value + e.rotation
    })
    .onEnd(() => {
      savedRotation.value = rotation.value
    })

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale
    })
    .onEnd(() => {
      savedScale.value = scale.value
    })

  const isLongPressed = useSharedValue(false)
  const isPanActivated = useSharedValue(false)

  const position = useSharedValue({ x: 0, y: 0 })

  const longPress = Gesture.LongPress().onStart((e) => {
    console.log('long press activated')
    isLongPressed.value = true
  })
  const pan = Gesture.Pan()
    .manualActivation(true)
    .onTouchesMove((event, state) => {
      if (isLongPressed.value && !isPanActivated.value) {
        console.log('pan gesture activated')
        isPanActivated.value = true
        state.activate()
      }
    })
    .onUpdate((event) => {
      let { translationX, translationY } = event
      position.value = { x: translationX, y: translationY }
    })
    .onEnd((event) => {
      isLongPressed.value = false
      isPanActivated.value = false
    })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: position.value.x },
      { translateY: position.value.y },
      { rotateZ: `${(rotation.value / Math.PI) * 180}deg` },
      { scale: scale.value },
    ],
  }))

  const composed = Gesture.Simultaneous(rotationGesture, pinchGesture, longPress, pan)

  return (
    <View className="flex flex-1 items-center justify-center bg-red-500 ">
      {/* <Text>Hey</Text> */}
      <GestureDetector gesture={composed}>
        <Animated.View className="h-[120px] w-[120px] bg-[#b58df1]" style={[animatedStyle]} />
      </GestureDetector>
    </View>
  )
}
