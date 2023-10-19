import React from 'react'

type sidebarOptionProps = {
  icon: React.JSX.Element
  name: string
}

const SidebarOptions = ({ icon, name }: sidebarOptionProps) => {
  return (
    <div className='flex gap-4 mt-5 '>
      <div className=''>{icon}</div>
      <div>{name}</div>
    </div>
  )
}

export default SidebarOptions
