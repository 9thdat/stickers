import { IMAGES } from '@/lib/config'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { TouchableOpacity, View } from 'react-native'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function Page() {
  const signIn = async () => {
    try {
      // await GoogleSignin.hasPlayServices()
      // const userInfo = await GoogleSignin.signIn()

      // console.log(userInfo)

      router.push('/me')
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

      <View className="absolute -right-6 top-[40%]">
        <Image
          className="h-[300px] w-[300px]"
          source={IMAGES.sunflower}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

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
