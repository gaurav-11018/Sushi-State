import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { deriveUserSalt } from '@/lib/salt'
import { jwtToAddress } from '@mysten/zklogin'
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'

async function getAddress(req: NextRequest) {
  const { content } = await req.json() // Use req.body to access the request body
  console.log(content)
  try {
    const session = await getServerSession(authOptions)

    if (session !== null) {
      const email = session?.user?.email as string

      // get the user from the database
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      // get the account from the database
      const account = await prisma.account.findFirst({
        where: {
          userId: user?.id,
        },
      })

      const userId = account?.userId

      const newPost = await prisma.post.create({
        data: {
          likes: 0, // Set likes to a default value.
          content: content, // Make sure 'content' is properly defined.
          name: session.user?.name || '', // Provide a default value for 'name'.
          email: session.user?.email || '', // Provide a default value for 'email'.
          date: new Date(), // Use 'new Date()' to create a Date object.
          user: {
            connect: {
              id: userId, // Assuming 'userId' is properly defined.
            },
          },
        },
      })

      console.log(newPost)

      return Response.json({ newPost }) // Use res to send the response
    }
  } catch (error) {
    console.error('Error fetching address:', error)
    return Response.json({ message: 'Failed' }) // Handle errors with the proper response
  }
}

export { getAddress as POST }
