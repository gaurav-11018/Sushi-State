import React from 'react'
import { Home, Search, BellRing, MessageCircle, Wallet2 } from 'lucide-react'
import SidebarOptions from '@/components/SidebarOptions'

const Sidebar = () => {
  return (
    <main className='text-black h-screen'>
      <div className='flex my-6 ml-7 mr-4 gap-3'>
        <div className='pt-2 font-serif text-[1.4rem] mr-3'>SocialFi</div>
      </div>
      <div className='mt-6 ml-4 font-sans '>
        <SidebarOptions name='Home' icon={<Home />} />
        <SidebarOptions name='Explore' icon={<Search />} />
        <SidebarOptions name='Notifications' icon={<BellRing />} />
        <SidebarOptions name='Messages' icon={<MessageCircle />} />
        <SidebarOptions name='Wallet' icon={<Wallet2 />} />
      </div>
    </main>
  )
}

export default Sidebar
