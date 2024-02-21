import { IMAGES } from '@/lib/config'
import { useFonts } from 'expo-font'
import { Image } from 'expo-image'
import { useCallback, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Gesture, GestureDetector, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function Page() {
  const [image, setImage] = useState<string | null>(null)
  const [selectedImageBase64, setSelectedImageBase64] = useState<string>('')

  const offset = useSharedValue({ x: 0, y: 0 })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value.x, {
            damping: 20,
            stiffness: 90,
          }),
        },
        {
          translateY: withSpring(offset.value.y, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    }
  })

  const start = useSharedValue({ x: 0, y: 0 })
  const gesture = Gesture.Pan()
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

  const pickImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: true,
      maxWidth: 400,
      maxHeight: 400,
    }

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else {
        if (!response.assets) return

        setSelectedImageBase64(response.assets[0].base64 || '')
      }
    })
  }

  return (
    <View className="absolute flex h-screen w-screen items-center justify-center bg-[#fff]">
      <View className="absolute h-full w-full">
        <Image
          className="h-full w-fit "
          source={IMAGES.bg_paper_texture}
          placeholder={blurhash}
          contentFit="cover"
          transition={150}
        />
      </View>

      <GestureDetector gesture={gesture}>
        <Animated.View style={[animatedStyles]} className="flex h-[1000px] w-[1000px] items-center justify-center">
          <Image
            className="h-[50px] w-[150px]"
            source={IMAGES.ga}
            placeholder={blurhash}
            contentFit="contain"
            transition={1000}
          />

          {selectedImageBase64 && (
            <Image
              style={{
                height: 200,
                width: 200,
              }}
              source={{
                uri: `data:image/png;base64,${selectedImageBase64}`,
              }}
            />
          )}
        </Animated.View>
      </GestureDetector>

      <View className="absolute top-[10%] flex w-full items-center justify-center">
        <View className="bg-white p-2 px-4">
          <Text style={{ fontFamily: 'KnewaveOutline' }} className="text-3xl">
            ng0chuy3n
          </Text>

          <View className="absolute -right-[37px] -top-[20px]">
            <Image
              className="h-[50px] w-[150px]"
              source={IMAGES.ga}
              placeholder={blurhash}
              contentFit="contain"
              transition={1000}
            />
          </View>
        </View>
      </View>

      <View className=" absolute  bottom-0 flex w-full flex-row items-center justify-between p-9 px-6">
        <View className="relative h-[95px] w-[136px]">
          <Image
            className="h-full w-full"
            source={IMAGES.friends}
            placeholder={blurhash}
            contentFit="contain"
            transition={1000}
          />
          <View className="absolute left-0 top-0 flex items-center justify-center px-2">
            <View className="aspect-square w-[25px] scale-x-[1.5] rounded-[50px] bg-red-600" />
            <Text style={{ fontFamily: 'Knewave' }} className="absolute scale-x-[1] text-white">
              99
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={pickImage} className="h-[80px] w-[110px]">
          <Image
            className="h-full w-full"
            source={IMAGES.camera}
            placeholder={blurhash}
            contentFit="contain"
            transition={1000}
          />
        </TouchableOpacity>
      </View>

      <View className=" absolute right-[-5%]">
        <Image
          className="h-[150px] w-[169px]"
          source={IMAGES.hand_apple}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />

        <View className="absolute left-[20%] top-[20%] flex items-center justify-center px-2">
          <View className="aspect-square w-[25px] scale-x-[1.2] rounded-[50px] bg-red-600" />
          <Text style={{ fontFamily: 'Knewave' }} className="absolute scale-x-[1] text-white">
            3
          </Text>
        </View>
      </View>
    </View>
  )
}
