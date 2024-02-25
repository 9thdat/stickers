const HELIUS_API_KEY = process.env.HELIUS_API_KEY

const HELIUS_ENDPOINT = `https://devnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`

// const mintCompressedNft = async () => {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       jsonrpc: '2.0',
//       id: 'helius-test',
//       method: 'mintCompressedNft',
//       params: {
//         name: 'Exodia the Forbidden One',
//         symbol: 'ETFO',
//         owner: '2SyTdr4mE4qiRgAp3d29NPjeBeCBw2dTbV9kAmu5mfEC',
//         description:
//           'Exodia the Forbidden One is a powerful, legendary creature composed of five parts: ' +
//           'the Right Leg, Left Leg, Right Arm, Left Arm, and the Head. When all five parts are assembled, Exodia becomes an unstoppable force.',
//         attributes: [
//           {
//             trait_type: 'Type',
//             value: 'Legendary',
//           },
//           {
//             trait_type: 'Power',
//             value: 'Infinite',
//           },
//           {
//             trait_type: 'Element',
//             value: 'Dark',
//           },
//           {
//             trait_type: 'Rarity',
//             value: 'Mythical',
//           },
//         ],
//         imageUrl:
//           'https://cdna.artstation.com/p/assets/images/images/052/118/830/large/julie-almoneda-03.jpg?1658992401',
//         externalUrl: 'https://www.yugioh-card.com/en/',
//         sellerFeeBasisPoints: 6900,
//       },
//     }),
//   })
//   const { result } = await response.json()
//   console.log('Minted asset: ', result.assetId)
// }
// mintCompressedNft()

export async function POST(request: Request) {
  const { imageUrl, owner } = await request.json()

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
        owner,
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
        imageUrl,
        sellerFeeBasisPoints: 5000,
      },
    }),
  })
  const { result } = await response.json()
  console.log('Minted asset: ', result.assetId)

  return Response.json({ ok: true })
}
