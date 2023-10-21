/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Card } from '@/components/ui/card'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export type TweetType = {
  name: string
  email: string
  content: string
  likes?: number
  userId?: string | undefined
  timestamp?: Date
}

export default async function Tweet({
  name,
  email,
  content,
  likes,
  timestamp,
}: TweetType) {
  const session = await getServerSession(authOptions)
  return (
    <Card
      key='1'
      className='w-[500px] mx-auto bg-white dark:bg-gray-800 shadow-md overflow-hidden md:max-w-3xl my-8'
    >
      <div className='md:flex'>
        <div className='p-8 w-full'>
          <div className='flex items-start '>
            <img
              className='w-10 h-10 rounded-full mr-4'
              src={`${session?.user?.image}`}
              alt='Profile'
            />
            <div className='flex items-center'>
              <div className='ml-4'>
                <div className='uppercase tracking-wide text-sm text-black dark:text-white font-semibold'>
                  {name}
                </div>
                <div className='text-gray-400 dark:text-gray-300'>{email}</div>
              </div>
            </div>
          </div>
          <p className='mt-4 text-gray-500 dark:text-gray-300'>{content}</p>
          <div className='flex mt-6 justify-between items-center'>
            <div className='flex space-x-4 text-gray-400 dark:text-gray-300'>
              <div className='flex items-center'>
                <svg
                  className=' h-6 w-6 text-red-500'
                  fill='none'
                  height='24'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
                </svg>
                <span className='ml-1 text-red-500'>{likes}</span>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-300'>
              {timestamp?.toDateString()}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
