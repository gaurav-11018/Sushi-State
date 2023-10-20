import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'
import getAddress from '@/app/api/getAddress/route'
import { CornerRightDown, CornerRightUp } from 'lucide-react'

export type WalletType = {
  fees: number
  value: number
  token: 'AVAX' | 'SOL' | 'SUI'
  balance: number
}

const WalletCard = async ({ token, value, fees, balance }: WalletType) => {
  const session = await getServerSession(authOptions)
  const address = await getAddress()

  return (
    session && (
      <div className='flex flex-col  align-middle justify-center '>
        <div className='flex flex-row'>
          <div>
            <div className='border-[1px] border-slate-300 rounded-lg px-3 py-4 flex flex-col gap-2 w-full'>
              <div className='flex flex-row'>
                <p
                  className='animate-fade-up font-bold  text-gray-500 opacity-0 [text-wrap:balance] md:text-lg'
                  style={{
                    animationDelay: '0.25s',
                    animationFillMode: 'forwards',
                  }}
                >
                  {session.user?.name}
                </p>
                <div className=' ml-auto text-xl font-bold text-gray-700'>
                  Balance : {balance} {token}
                </div>
              </div>
              <p
                className='font-mono text-sm text-gray-700 animate-fade-up  opacity-0 [text-wrap:balance]'
                style={{
                  animationDelay: '0.25s',
                  animationFillMode: 'forwards',
                }}
              >
                {session.user?.email}
              </p>
              <p
                className='animate-fade-up font-bold  text-gray-500 opacity-0 [text-wrap:balance] md:text-lg'
                style={{
                  animationDelay: '0.25s',
                  animationFillMode: 'forwards',
                }}
              >
                Your Sui address is:
              </p>
              <p
                className='font-mono text-sm text-gray-700 animate-fade-up  opacity-0 [text-wrap:balance]'
                style={{
                  animationDelay: '0.25s',
                  animationFillMode: 'forwards',
                }}
              >
                {address}
              </p>
            </div>
          </div>
        </div>
        <div className='border-[1px] border-slate-300 rounded-lg px-3 py-4 flex flex-col gap-2 w-full'>
          <div className='flex flex-row justify-center gap-[10%]'>
            <div className='flex flex-col'>
              <p
                className='animate-fade-up font-bold  text-gray-500 opacity-0 [text-wrap:balance] md:text-lg'
                style={{
                  animationDelay: '0.25s',
                  animationFillMode: 'forwards',
                }}
              >
                <div className=''>Fees Earned</div>
              </p>
              <div className=' ml-auto text-xl font-bold text-gray-700'>
                {fees}
                {token}
              </div>
            </div>
            <div className='flex flex-col'>
              <p
                className='animate-fade-up font-bold  text-gray-500 opacity-0 [text-wrap:balance] md:text-lg'
                style={{
                  animationDelay: '0.25s',
                  animationFillMode: 'forwards',
                }}
              >
                <div className=''>Fees Earned</div>
              </p>
              <div className='ml-auto text-xl font-bold text-gray-700'>
                {value}
                {token}
              </div>
              <div className=' ml-auto text-xl font-bold text-gray-700'></div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

const Wallet = () => {
  return (
    <div className='flex flex-col mt-[5%] gap-6 items-center h-screen '>
      <WalletCard fees={100} value={200} token='AVAX' balance={500} />

      <div className='w-1/2  border-t border-2 border-black'></div>

      <div className='flex flex-row justify-center gap-10'>
        <Button className='rounded-full  bg-gray-800 text-white'>
          <CornerRightUp className='text-white flex flex-col' />
          <h1>Deposit</h1>
        </Button>
        <Button className=' rounded-full bg-gray-800 text-white '>
          <CornerRightDown className='text-white flex flex-col' />
          <h1>Withdraw</h1>
        </Button>
      </div>
    </div>
  )
}

export default Wallet
