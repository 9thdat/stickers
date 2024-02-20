import prisma from '@/lib/prisma'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params

  const user = await prisma.users.findUnique({ where: { id } })

  if (!user) {
    return Response.json({ message: 'User not found' }, { status: 404 })
  }

  return Response.json(user)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const user = await request.json()

  const result = await prisma.users.update({
    where: { id },
    data: user,
  })

  return Response.json(result)
}
