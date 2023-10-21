/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import prisma from '@/lib/prisma'

const explore = async () => {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      image: true,
      id: true,
    },
  })

  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          className='max-w-xs mx-auto flex flex-wrap  bg-white shadow-lg rounded-lg overflow-hidden m-4'
        >
          <div className='relative'>
            <img src={`${user.image}`} className='w-full' />
          </div>
          <div className='p-4'>
            <h2 className='text-xl font-semibold text-gray-800'>{user.name}</h2>
            <div className='mt-2'>
              <a href={`#`} className='text-sm text-indigo-500 hover:underline'>
                View Profile
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default explore

// thank you for onboarding
// red evn click here -> ockto page
