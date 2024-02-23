import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'expo-image'
import { IMAGES } from '@/lib/config'
import slug from 'slug'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface UserNameProps {
  name: string
}

export default function UserName({ name }: UserNameProps) {
  return (
    <View className="absolute top-[10%] flex w-full items-center justify-center">
      <View className=" skew-x-6 bg-white p-2 px-4">
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
      </View>
    </View>
  )
}
