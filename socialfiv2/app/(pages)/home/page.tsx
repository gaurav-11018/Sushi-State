import Tweet from '@/components/tweet'
import TweetForm from '@/components/tweet-input'
import { PrismaClient } from '@prisma/client'
import React from 'react'

const prisma = new PrismaClient()

async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    })
    return posts
  } catch (error) {
    console.error(error)
  }
}

const Home = async () => {
  const data = await getPosts()
  return (
    <div className='flex flex-col justify-center items-center '>
      <TweetForm />
      {data?.map((post) => (
        <Tweet
          content={post.content}
          email={post.email}
          likes={post.likes}
          name={post.name}
          timestamp={post.date}
          key={post.userId}
        />
      ))}
    </div>
  )
}

export default Home
