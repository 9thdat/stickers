import DeleteButton from '@/components/delete-button'
import MyActions from '@/components/my-actions'
import NotificationTrigger from '@/components/notification-trigger'
import UserName from '@/components/user-name'
import { IMAGES } from '@/lib/config'
import axios from 'axios'
import { Image } from 'expo-image'
import { useState } from 'react'
import { View } from 'react-native'
import { Gesture, GestureDetector, TouchableOpacity } from 'react-native-gesture-handler'
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function Page() {
  const [responseBase64, setResponseBase64] = useState<string>('')

  const [showDelete, setShowDelete] = useState<boolean>(false)

  const offset = useSharedValue({ x: 0, y: 0 })

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

  const pickImage = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: true,
      maxWidth: 400,
      maxHeight: 400,
    }

    const pickerResponse = await launchImageLibrary(options)

    if (!pickerResponse.didCancel) {
      if (!pickerResponse.assets) return

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/outline', {
          image: pickerResponse.assets[0].base64,
        })

        setResponseBase64(response.data.image)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const selectSticker = () => {
    setShowDelete(!showDelete)
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

      <View className="flex h-[70%] w-full items-center justify-center rounded-lg  p-5 pb-2">
        <View className="relative h-full w-full rounded-2xl border-[2px] border-[#8AAFE8]">
          <GestureDetector gesture={gesture}>
            <Animated.View style={[animatedStyles]} className="h-[50px] w-[150px]">
              <TouchableOpacity activeOpacity={1} onPress={selectSticker}>
                {responseBase64 ? (
                  <Image
                    className="h-[50px] w-[150px]"
                    source={{
                      uri: `data:image/png;base64,${responseBase64}`,
                    }}
                    placeholder={blurhash}
                    contentFit="contain"
                    transition={1000}
                  />
                ) : (
                  <Image
                    className="h-[50px] w-[150px]"
                    source={IMAGES.ga}
                    placeholder={blurhash}
                    contentFit="contain"
                    transition={1000}
                  />
                )}
              </TouchableOpacity>
            </Animated.View>
          </GestureDetector>
        </View>
      </View>

      <UserName name="ng0chuyen" />
      <MyActions pickImage={pickImage} shown={!showDelete} />
      <DeleteButton shown={showDelete} />
      <NotificationTrigger shown={showDelete} />
    </View>
  )
}
