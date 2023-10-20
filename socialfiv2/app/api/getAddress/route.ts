import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { deriveUserSalt } from '@/lib/salt'
import { jwtToAddress } from '@mysten/zklogin'
import { getServerSession } from 'next-auth/next'

export default async function getAddress() {
  try {
    const session = await getServerSession(authOptions)

    // if the user is logged in, fetch their address
    let address = null

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

      // get the id_token from the account
      const id_token = account?.id_token

      // get the salt from the id_token
      const salt = deriveUserSalt(id_token as string)

      // get the address from the id_token and salt
      address = jwtToAddress(id_token as string, salt)
      return address
    }
  } catch (error) {
    console.error('Error fetching address:', error)
  }
}
