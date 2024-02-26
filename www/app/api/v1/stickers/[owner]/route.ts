import prisma from '@/lib/prisma'

export async function GET(request: Request, { params }: { params: { owner: string } }) {
  const data = await prisma.stickers.findMany({
    where: {
      owner: String(params.owner),
    },
  })

  return Response.json({ data })
}
