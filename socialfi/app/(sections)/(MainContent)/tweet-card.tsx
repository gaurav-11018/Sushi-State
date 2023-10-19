/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Card } from '@/components/ui/card'

export type TweetType = {
  profilePicture: string
  name: string
  handle: string
  content: string
  likes: number
  retweets: number
  quote?: string
  timestamp?: string
}

export default function Tweet({
  profilePicture,
  name,
  handle,
  content,
  likes,
  retweets,
  quote,
  timestamp,
}: TweetType) {
  return (
    <Card
      key='1'
      className='w-[500px] mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-3xl my-8'
    >
      <div className='md:flex'>
        <div className='p-8 w-full'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img
                alt='Profile picture'
                className='rounded-full'
                height='40'
                src={profilePicture}
                style={{
                  aspectRatio: '40/40',
                  objectFit: 'cover',
                }}
                width='40'
              />
              <div className='ml-4'>
                <div className='uppercase tracking-wide text-sm text-black dark:text-white font-semibold'>
                  {name}
                </div>
                <div className='text-gray-400 dark:text-gray-300'>{handle}</div>
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

              <div
                className='flex items
              -center'
              >
                <svg
                  className=' h-6 w-6 text-blue-500'
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
                  <path d='m17 2 4 4-4 4' />
                  <path d='M3 11v-1a4 4 0 0 1 4-4h14' />
                  <path d='m7 22-4-4 4-4' />
                  <path d='M21 13v1a4 4 0 0 1-4 4H3' />
                </svg>
                <span className='ml-1 text-blue-500'>{retweets}</span>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-300'>{timestamp}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}
