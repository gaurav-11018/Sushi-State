import React from 'react'
import {
  Home,
  Search,
  BellRing,
  MessageCircle,
  Wallet2,
  User2,
} from 'lucide-react'
import SidebarOptions from '@/components/SidebarOptions'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <main className='text-black h-screen'>
      <div className='flex my-6 ml-7 mr-4 gap-3'>
        <div className='pt-2 font-serif text-[1.4rem] mr-3'>SocialFi</div>
      </div>
      <div className='mt-6 ml-4 font-sans '>
        <Link href={`/`}>
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
    </main>
  )
}

export default Sidebar
