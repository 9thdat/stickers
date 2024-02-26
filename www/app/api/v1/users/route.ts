import prisma from '@/lib/prisma'

export async function GET() {
  return Response.json({ wau: 'users-wau' })
}

export async function POST(request: Request) {
  const user = await request.json()

  const result = await prisma.users.create({
    data: user,
  })

  return Response.json(result)
}
