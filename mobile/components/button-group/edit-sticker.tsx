import { useSelectSticker } from '@/hooks/use-selected-sticker'
import useStage from '@/hooks/use-stage'
import { useUser } from '@/hooks/use-user'
import { IMAGES } from '@/lib/config'
import { Image } from 'expo-image'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface EditStickerButtonGroupProps {
  shown: boolean
  mutate: () => void
}

export default function EditStickerButtonGroup({ shown, mutate }: EditStickerButtonGroupProps) {
  const bottom = useSharedValue(0)
  const opacity = useSharedValue(0)
  const { setStage } = useStage()
  const { selectedSticker, transform, setSelectedSticker } = useSelectSticker()
  const { deleteSticker, updateSticker, user } = useUser()

  useEffect(() => {
    bottom.value = withSpring(shown ? 0 : -150, {
      damping: 20,
      stiffness: 200,
    })

    opacity.value = withSpring(shown ? 1 : 0, {
      damping: 20,
      stiffness: 200,
    })
  }, [shown])

  const ok = async () => {
    await updateSticker({
      id: selectedSticker,
      owner: user?.wallet || '',
      position: `${transform.position.x},${transform.position.y}`,
      scale: transform.scale,
      rotation: transform.rotation,
    })
    setStage('normal')
    setSelectedSticker('')
  }

  const deleteStickerHandle = async () => {
    await deleteSticker(selectedSticker)
    setStage('normal')
    setSelectedSticker('')
    mutate()
  }

  return (
    <Animated.View
      style={{
        bottom,
        opacity,
      }}
      className=" absolute bottom-[-150px] flex w-full flex-row items-center justify-between p-9 px-9"
    >
      <TouchableOpacity onPress={deleteStickerHandle} className="relative h-[70px] w-[100px]">
        <Image
          className="h-full w-full"
          source={IMAGES.trash_bin}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={ok} className="h-100px] w-[100px]">
        <Image
          className="h-full w-full"
          source={IMAGES.mint}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}
