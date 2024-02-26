import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  return Response.json({})
}

export async function POST(request: Request) {
  const sticker = await request.json()

  const result = await prisma.stickers.create({
    data: {
      id: String(sticker.id),
      owner: String(sticker.owner),
      scale: String(sticker.scale),
      position: String(sticker.position),
      rotation: String(sticker.rotation),
    },
  })

  return Response.json(result)
}

export async function DELETE(request: Request) {
  const sticker = await request.json()

  const result = await prisma.stickers.delete({
    where: {
      id: String(sticker.id),
    },
  })

  return Response.json(result)
}

export async function PUT(request: Request) {
  const sticker = await request.json()

  const data = await prisma.stickers.update({
    where: {
      id: String(sticker.id),
    },
    data: {
      scale: String(sticker.scale),
      position: String(sticker.position),
      rotation: String(sticker.rotation),
    },
  })

  return Response.json({ data })
}
