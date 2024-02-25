import { useUser } from '@/hooks/use-user'
import { IMAGES } from '@/lib/config'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useState } from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function Page() {
  const { user, setUser, updateUserHandle } = useUser()
  const [handle, setHandle] = useState(user?.handle || '')

  const updateHandle = async () => {
    if (!handle || !user) return

    setUser({ ...user, handle })

    const response = await updateUserHandle(handle)

    router.replace('/me')
  }

  return (
    <View className="absolute flex h-screen w-screen items-center justify-center bg-[#fff]">
      <View className="absolute bottom-[-4%] w-full">
        <Image
          className="h-[400px] w-full "
          source={IMAGES.bg_handle}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className=" absolute top-[16%] flex w-full items-center justify-center">
        <Image
          className="h-[140px] w-[260px]"
          source={IMAGES.you_are}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />

        <Image
          className="absolute right-[-0%] top-[-50%] h-[150px] w-[250px]"
          source={IMAGES.nheo_fight_ga}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className=" absolute bottom-[5%] flex w-full items-center ">
        <Image
          className="h-[300px] w-[390px]"
          source={IMAGES.cow_rug}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View className=" flex w-full items-center ">
        <TextInput
          style={{
            fontFamily: 'Knewave',
            fontSize: 32,
          }}
          value={handle}
          onChangeText={setHandle}
          placeholder={user?.handle || 'Hello'}
          autoCapitalize="none"
        />
      </View>

      <View className=" absolute bottom-[18%] flex w-full items-center">
        <Image
          className="h-[283px] w-[300px]"
          source={IMAGES.wood_table}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />

        {handle.length > 3 && handle.length < 15 && (
          <TouchableOpacity className="absolute top-[-110px] h-[50px] w-[100px]" onPress={updateHandle}>
            <Image
              className="h-full w-full"
              source={IMAGES.ok}
              placeholder={blurhash}
              contentFit="contain"
              transition={1000}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
