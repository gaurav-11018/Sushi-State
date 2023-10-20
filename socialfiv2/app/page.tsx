import { authOptions } from '@/lib/auth'

import { getServerSession } from 'next-auth/next'
import Sidebar from './(sections)/Sidebar'
import getAddress from './api/getAddress/route'
import Hero from '@/components/hero'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const address = await getAddress()

  return (
    <>
      <div className='z-10 w-full h-2/3  '>
        {session !== null && (
          <div className='flex flex-row '>
            <Sidebar />

            <div className='flex flex-col items-center mx-auto my-10 align-middle'>
              <h1
                className='animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-4xl md:leading-[5rem] mt-[10%]'
                style={{
                  animationDelay: '0.15s',
                  animationFillMode: 'forwards',
                }}
              >
                {`Welcome back, ${session?.user?.name}`}
              </h1>
              <div className='border-[1px] border-slate-300 rounded-lg px-3 py-4 flex flex-col gap-2 w-full'>
                <p
                  className='animate-fade-up font-bold text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-lg'
                  style={{
                    animationDelay: '0.25s',
                    animationFillMode: 'forwards',
                  }}
                >
                  Your Sui address is:
                </p>
                <p
                  className='font-mono text-sm text-gray-700 animate-fade-up text-center opacity-0 [text-wrap:balance]'
                  style={{
                    animationDelay: '0.25s',
                    animationFillMode: 'forwards',
                  }}
                >
                  {address}
                </p>
              </div>
              <Link href={`/home`} className='my-5'>
                <Button className='bg-gray-800 text-white'>
                  Go to home page
                </Button>
              </Link>
            </div>
          </div>
        )}
        <div className='w-full'>{session === null && <Hero />}</div>
      </div>
    </>
  )
}
