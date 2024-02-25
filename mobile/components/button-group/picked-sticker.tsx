import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { Image } from 'expo-image'
import { HELIUS_ENDPOINT, IMAGES } from '@/lib/config'
import useStage from '@/hooks/use-stage'
import { useSelectSticker } from '@/hooks/use-selected-sticker'
import { computeStickerURI } from '@/lib/utils'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface EditStickerButtonGroupProps {
  shown: boolean
}

export default function PickedStickerButtonGroup({ shown }: EditStickerButtonGroupProps) {
  const bottom = useSharedValue(0)
  const opacity = useSharedValue(0)
  const { setStage } = useStage()
  const { selectedSticker } = useSelectSticker()

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
            name: 'Exodia the Forbidden One',
            symbol: 'STKS',
            owner: 'GpjDzFpdim6q2GLaRcZTFbDs3G6SgVLKFZYCqDwCmd2u',
            description:
              'Exodia the Forbidden One is a powerful, legendary creature composed of five parts: ' +
              'the Right Leg, Left Leg, Right Arm, Left Arm, and the Head. When all five parts are assembled, Exodia becomes an unstoppable force.',
            attributes: [
              {
                trait_type: 'Position',
                value: ``,
              },
              {
                trait_type: 'Scale',
                value: 'Infinite',
              },
            ],
            imageUrl: computeStickerURI(selectedSticker),
            sellerFeeBasisPoints: 5000,
          },
        }),
      })
      const { result } = await response.json()

      console.log(result)

      setStage('normal')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Animated.View
      style={{
        bottom,
        opacity,
      }}
      className="absolute bottom-[-150px] flex w-full flex-row items-center justify-between p-9 px-9"
    >
      <TouchableOpacity onPress={() => setStage('normal')} className="relative h-[70px] w-[100px]">
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
