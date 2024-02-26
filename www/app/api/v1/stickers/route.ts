import prisma from '@/lib/prisma'

export async function GET() {
  return Response.json({ wau: 'stickers-wau' })
}

export async function POST(request: Request) {
  const sticker = await request.json()

  const result = await prisma.stickers.create({
    data: {
      id: String(sticker.id),
      owner: String(sticker.owner),
      scale: String(sticker.scale),
      position: `${sticker.position.x},${sticker.position.y}`,
      rotation: `${sticker.rotation.x},${sticker.rotation.y}`,
    },
  })

  return Response.json(result)
}
