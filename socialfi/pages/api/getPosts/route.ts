// pages/api/posts.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
            handle: true,
          },
        },
      },
    })
    return posts
  } catch (error) {
    console.error(error)
  }
}
