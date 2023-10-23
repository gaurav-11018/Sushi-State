'use client'

import React, { useState } from 'react'

import { SessionProvider } from 'next-auth/react'
// import { batchTransferSui } from '@utils/src/transfer-sui.ts'
/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react'

const ProfileData: React.FC = () => {
  const { data: session } = useSession()

  const name = session?.user?.name
  const email = session?.user?.email
  const imageUrl = session?.user?.image

  return (
    <section className='flex items-center justify-between mb-6'>
      <div className='flex items-center'>
        <img
          className='w-20 h-20 rounded-full mr-4'
          src={`${imageUrl}`}
          alt='Profile'
        />
        <div>
          <h2 className='text-lg font-bold'>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </section>
  )
}

const Profile: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')

  return (
    <div className='container mx-auto px-4 py-10'>
      <main className='mt-10'>
        <SessionProvider>
          <ProfileData />
        </SessionProvider>

        <section className='mb-6 flex items-center justify-around bg-blue-100 p-4 rounded-lg'>
          <div className='text-center'>
            <h3 className='text-lg font-bold'>2</h3>
            <p>Following</p>
          </div>
          <div className='text-center'>
            <h3 className='text-lg font-bold'>261</h3>
            <p>Followers</p>
          </div>
          <div className='text-center'>
            <h3 className='text-lg font-bold'>23,456</h3>
            <p>Volume</p>
          </div>
          <div className='text-center'>
            <h3 className='text-lg font-bold'>789</h3>
            <p>Holders</p>
          </div>
        </section>

        <section className='mb-6 flex justify-center space-x-4'>
        <button
  className='bg-blue-700 text-white px-4 py-2 rounded'
  onClick={async () => {
    setModalType('buy');
    setShowModal(true);
    // await batchTransferSui();
  }}
>
  Buy
</button>

          <button
            className='bg-blue-700 text-white px-4 py-2 rounded'
            onClick={() => {
              setModalType('sell')
              setShowModal(true)
            }}
          >
            Sell
          </button>
        </section>
      </main>
      {showModal && (
        <TradeModal type={modalType} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

const TradeModal: React.FC<{ type: string; onClose: () => void }> = ({
  type,
  onClose,
}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className='absolute inset-0 bg-black opacity-10'
        onClick={onClose}
      ></div>
      <div className='bg-black w-1/2 rounded-lg p-6'>
        <h2 className='text-white text-xl font-bold mb-4'>Trade Tickets</h2>
        <div className='flex items-center justify-between mb-4'>
          <button className='bg-red-500 text-white py-2 px-6 rounded-full'>
            {type === 'buy' ? 'Buy Ticket' : 'Sell Ticket'}
          </button>
          <span className='text-white'>
            {type === 'buy' ? '43.3822 AVAX' : '35.0438 AVAX'}
          </span>
        </div>
        <button
          className='bg-white text-black py-1 px-4 rounded-full'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Profile
