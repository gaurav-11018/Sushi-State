// import { NextApiRequest, NextApiResponse } from 'next'
// import { PrismaClient } from '@prisma/client'

// export default async function addPostHandler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ): Promise<void> {
//   if (req.method === 'POST') {
//     const prisma = new PrismaClient()

//     try {
//       const { title, content, authorId } = req.body // Assuming you send these fields in the request body

//       const post = await prisma.post.create({
//         data: {
//           title,
//           content,
//           authorId,
//         },
//       })

//       res.status(201).json(post)
//     } catch (error) {
//       console.error('Error creating post:', error)
//       res.status(500).json({ error: 'Error creating the post' })
//     } finally {
//       await prisma.$disconnect()
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' })
//   }
// }
