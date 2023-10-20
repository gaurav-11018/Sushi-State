// import { NextApiRequest, NextApiResponse } from 'next'
// import { authOptions } from '@/lib/auth'
// import prisma from '@/lib/prisma'
// import { deriveUserSalt } from '@/lib/salt'
// import { jwtToAddress } from '@mysten/zklogin'
// import { getServerSession } from 'next-auth/next'

// async function getAddress(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const session = await getServerSession(authOptions)
//     const { content } = req.body

//     if (session !== null) {
//       const email = session?.user?.email as string

//       // get the user from the database
//       const user = await prisma.user.findUnique({
//         where: {
//           email,
//         },
//       })

//       // get the account from the database
//       const account = await prisma.account.findFirst({
//         where: {
//           userId: user?.id,
//         },
//       })

//       const userId = account?.userId

//       const newPost = await prisma.post.create({
//         data: {
//           date: new Date(),
//           email: session.user?.email!,
//           likes: 0,
//           name: session.user?.name!,
//           id: account?.id!,
//           user: {
//             connect: {
//               id: userId,
//             },
//           },
//           content: content!,
//         },
//       })

//       res.statusCode = 201 // Set the response status code.
//       return res.json(newPost)
//     }
//   } catch (error) {
//     console.error('Error fetching address:', error)
//   }
// }

// export { getAddress as POST }
