import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <div className='p-4'>
      <div className='max-w-md p-4 mt-4 rounded-lg shadow-md'>
        <p className='text-xl'>Thank you for joining us</p>
        <div className='p-2 mt-4 rounded'>
          <h1>
            To be eligible for a red envelope, click here to create your
            <a
              href='https://okto.tech/'
              className='text-blue-400 mx-1'
              target='_blank'
            >
              Okto Wallet.
            </a>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Notification
