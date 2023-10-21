'use client'
import useScroll from '@/lib/hooks/use-scroll'
import { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { Google } from './icons'
import Scale3 from './icons/scale3.svg'
import { useSignInModal } from './sign-in-modal'
import UserDropdown from './user-dropdown'
import SidebarOptions from './SidebarOptions'
import {
  BellRing,
  Search,
  Home,
  MessageCircle,
  Wallet2,
  User2,
} from 'lucide-react'

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal()
  const scrolled = useScroll(50)

  return (
    <main className='border-b pb-5 border-black border-1'>
      <SignInModal />
      <div
        className={`top-0 w-full flex justify-center ${
          scrolled
            ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
            : 'bg-white/0'
        } z-30 transition-all`}
      >
        <div className='mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full'>
          <Link href='/' className='flex items-center font-display text-2xl'>
            <Image
              src={`/logo.svg`}
              alt='SocialFI Logo '
              width='30'
              height='30'
              className='mr-2 rounded-sm'
            ></Image>
            <p>SocialFI</p>
          </Link>

          <div className='flex flex-row gap-4'>
            <Link href={`/home`}>
              <SidebarOptions name='Home' icon={<Home />} />
            </Link>
            <Link href={`/explore`}>
              <SidebarOptions name='Explore' icon={<Search />} />
            </Link>
            <Link href={`/notifications`}>
              <SidebarOptions name='Notifications' icon={<BellRing />} />
            </Link>
            <Link href={`/messages`}>
              <SidebarOptions name='Messages' icon={<MessageCircle />} />
            </Link>
            <Link href={`/wallet`}>
              <SidebarOptions name='Wallet' icon={<Wallet2 />} />
            </Link>
            <Link href={`/profile`}>
              <SidebarOptions name='Profile' icon={<User2 />} />
            </Link>
          </div>

          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className='flex gap-2 items-center rounded-full border border-gray-300 p-1.5 px-4 text-sm transition-all  background-animate'
                onClick={() => setShowSignInModal(true)}
              >
                <Google className='h-1 w-1' />
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
