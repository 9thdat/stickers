import Sunflower from '@/components/stickers/sunflower'
import { useGameShift } from '@/hooks/use-gameshift'
import { useUser } from '@/hooks/use-user'
import { IMAGES } from '@/lib/config'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { TouchableOpacity, View } from 'react-native'
import slug from 'slug'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function Page() {
  const { user, fetchUser, setUser, createUser, setIsAuth } = useUser()
  const gameShift = useGameShift()

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const { user } = await GoogleSignin.signIn()

      if (user) {
        console.log('fetch user from server: ', user.id)
        const stickerFetchUserResponse = await fetchUser(user.id)

        if (stickerFetchUserResponse.success) {
          console.log('found user from server: ', stickerFetchUserResponse.message.data)
          setUser(stickerFetchUserResponse.message.data)
          setIsAuth(true)

          router.push('/me')

          return
        }

        let u = null

        if (!stickerFetchUserResponse.success) {
          console.log('fetch user from gameshift: ', user.id)
          const gameShiftFetchUserResponse = await gameShift.fetchUser(user.id)

          if (gameShiftFetchUserResponse.success) {
            console.log('found user from gameshift: ', gameShiftFetchUserResponse.message.data)
            u = {
              id: gameShiftFetchUserResponse.message.data.referenceId,
              email: gameShiftFetchUserResponse.message.data.email,
              handle: slug(user.name || 'Someone', ''),
              wallet: gameShiftFetchUserResponse.message.data.address,
            }
          }

          if (!gameShiftFetchUserResponse.success) {
            console.log('create user from gameshift: ', user.id, user.email)
            const gameShiftRegisterUserResponse = await gameShift.registerUser(user.id, user.email)

            if (gameShiftRegisterUserResponse.success) {
              u = {
                id: gameShiftRegisterUserResponse.message.data.referenceId,
                email: gameShiftRegisterUserResponse.message.data.email,
                handle: slug(user.name || 'Someone', ''),
                wallet: gameShiftRegisterUserResponse.message.data.address,
              }
            }
          }
        }

        if (u) {
          setUser(u)
          await createUser(u)

          router.push('/handle')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className="absolute flex h-screen w-screen items-center justify-center bg-[#fff]">
      <View className="absolute top-0 h-full w-full">
        <Image
          className="h-[85%] w-full "
          source={IMAGES.bg_login}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className="absolute -left-[10%] top-[22%]">
        <Image
          className="h-[200px] w-[220px]"
          source={IMAGES.shake_hand}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className="absolute -left-[24%] top-[3%]">
        <Image
          className="h-[280px] w-[360px]"
          source={IMAGES.capybara_doge}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className="absolute -left-[22%] top-[35%]">
        <Image
          className="h-[320px] w-[350px]"
          source={IMAGES.login_wif_cup}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className="absolute -right-[30%] bottom-[14%] -rotate-[38deg]">
        <Image
          className="h-[300px] w-[300px]"
          source={IMAGES.point_hand}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <Sunflower />

      <View className="absolute -left-[22%] bottom-[20%]">
        <Image
          className="h-[154px] w-[370px]"
          source={IMAGES.airplane}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className="absolute -right-[25%] -top-[5%]">
        <Image
          className="h-[363px] w-[363px]"
          source={IMAGES.mot_cot_pagoda}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className="absolute right-[29%] top-[29%]">
        <Image
          className="h-[130px] w-[130px]"
          source={IMAGES.hydrangea}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className="absolute -right-[5%] top-[31%] rotate-[20deg]">
        <Image
          className="h-[120px] w-[120px]"
          source={IMAGES.airpod}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <TouchableOpacity className="absolute bottom-12 w-full px-5" onPress={() => signIn()}>
        <Image
          className="h-[120px] w-full"
          source={IMAGES.get_in}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </TouchableOpacity>
    </View>
  )
}
