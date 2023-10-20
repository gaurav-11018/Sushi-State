import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row p-5 w-full'>
      <Input className='w-1/3 ml-auto mr-5' placeholder='Search' />
      <Button className=' mr-5'>Sign Up</Button>
    </div>
  )
}

export default Navbar
