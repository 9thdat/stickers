import { useSelectSticker } from '@/hooks/use-selected-sticker'
import useStage from '@/hooks/use-stage'
import { useUser } from '@/hooks/use-user'
import { HELIUS_ENDPOINT, IMAGES } from '@/lib/config'
import { computeStickerURI } from '@/lib/utils'
import { Image } from 'expo-image'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface EditStickerButtonGroupProps {
  shown: boolean
  onCanceled: () => void
  mutate: () => void
}

export default function PickedStickerButtonGroup({ shown, onCanceled, mutate }: EditStickerButtonGroupProps) {
  const bottom = useSharedValue(0)
  const opacity = useSharedValue(0)
  const { setStage } = useStage()
  const { selectedSticker, transform, setSelectedSticker } = useSelectSticker()
  const { user, createSticker } = useUser()

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

  const mint = async () => {
    if (!user) return

    try {
      const response = await fetch(HELIUS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'stickers-v1',
          method: 'mintCompressedNft',
          params: {
            name: `Sticker by @${user?.handle}`,
            symbol: 'STKS',
            owner: user?.wallet,
            description: `A sticker by @${user?.handle}.`,
            attributes: [],
            imageUrl: computeStickerURI(selectedSticker),
            sellerFeeBasisPoints: 5000,
          },
        }),
      })

      const { result } = await response.json()

      await createSticker({
        id: selectedSticker.split('.')[0],
        owner: user.wallet,
        position: `${transform.position.x},${transform.position.y}`,
        scale: transform.scale,
        rotation: transform.rotation,
        address: result.assetId,
      })
      mutate()
      onCanceled()
      setStage('normal')
      setSelectedSticker('')
    } catch (error) {
      console.log(error)
    }
  }

  const cancel = () => {
    setStage('normal')
    setSelectedSticker('')
    onCanceled()
  }

  return (
    <Animated.View
      style={{
        bottom,
        opacity,
      }}
      className="absolute bottom-[-150px] flex w-full flex-row items-center justify-between p-9 px-9"
    >
      <TouchableOpacity onPress={cancel} className="relative h-[70px] w-[100px]">
        <Image
          className="h-full w-full"
          source={IMAGES.nope}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={mint} className="h-100px] w-[100px]">
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
