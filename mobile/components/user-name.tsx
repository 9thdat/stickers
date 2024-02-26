import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import { IMAGES } from '@/lib/config'
import slug from 'slug'
import { useUser } from '@/hooks/use-user'
import { router } from 'expo-router'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface UserNameProps {
  name: string
}

export default function UserName({ name }: UserNameProps) {
  const { setIsAuth } = useUser()

  const logout = () => {
    setIsAuth(false)
    router.replace('/login')
  }

  return (
    <View className="absolute top-[10%] flex w-full items-center justify-center">
      <TouchableOpacity onPress={logout} activeOpacity={1} className=" bg-[#FBFBFB] p-2 px-4">
        <Text style={{ fontFamily: 'KnewaveOutline' }} className="text-3xl">
          {slug(name)}
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
      </TouchableOpacity>
    </View>
  )
}
