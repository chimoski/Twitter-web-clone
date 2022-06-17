import React from 'react'
import {SVGProps} from 'react'


interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    title: string 
}


function SidebarRow({Icon, title}:Props) {
  return (
    <div className=' max-w-fit group flex space-x-2 px-4 py-3 rounded-full 
    hover:bg-gray-100 cursor-pointer 
    transition-all duration-200'>
        <Icon className="h-6 w-6"/>
        <p className='group-hover:text-twitter hidden md:inline text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow