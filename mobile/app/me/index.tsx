import EditStickerButtonGroup from '@/components/button-group/edit-sticker'
import MyActionButtonGroup from '@/components/button-group/my-action'
import PickedStickerButtonGroup from '@/components/button-group/picked-sticker'
import EditableSticker from '@/components/editable-sticker'
import NotificationTrigger from '@/components/notification-trigger'
import UserName from '@/components/user-name'
import { useSelectSticker } from '@/hooks/use-selected-sticker'
import useStage from '@/hooks/use-stage'
import { useUser } from '@/hooks/use-user'
import { HELIUS_ENDPOINT, IMAGES } from '@/lib/config'
import { Sticker } from '@/types/sticker'
import axios from 'axios'
import { Image } from 'expo-image'
import { useState } from 'react'
import { View } from 'react-native'
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker'
import useSWR from 'swr'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

const fetcher = (url: string, ownerAddress: string) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'stickers-v1',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress,
        page: 1,
        limit: 1000,
      },
    }),
  }).then((r) => r.json())

export default function Page() {
  const [responseImage, setResponseImage] = useState<string>('')
  const { stage, setStage } = useStage()
  const { setSelectedSticker } = useSelectSticker()
  const { user } = useUser()

  const { data, error } = useSWR(user ? HELIUS_ENDPOINT : null, (url) => fetcher(url, user?.wallet || ''))

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

        // setResponseSticker(response.data)
        setResponseImage(response.data.image)
        setStage('picked')
        setSelectedSticker(response.data.image)
      } catch (error) {
        console.error(error)
      }
    }
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
          {responseImage && <EditableSticker image={responseImage} />}
        </View>
      </View>

      <UserName name={user?.handle || 'Someone'} />
      <MyActionButtonGroup pickImage={pickImage} shown={stage === 'normal'} />
      <PickedStickerButtonGroup shown={stage === 'picked'} />
      <EditStickerButtonGroup shown={stage === 'editing'} />

      <NotificationTrigger shown={stage === 'normal'} />
    </View>
  )
}
