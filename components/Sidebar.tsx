// modules import
import React from 'react'
import SidebarRow from './SidebarRow'

// import icons
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
  } from '@heroicons/react/outline'

export const Sidebar = () => {
  return (
    <div className=' col-span-2 flex flex-col items-center px-4 md:items-start'>
        <img 
        className='h-10 w-10 m-3'
        src="https://links.papareact.com/drq" alt="Logo" />
       <SidebarRow Icon={HomeIcon} title="Home"/>
       <SidebarRow Icon={HashtagIcon} title="Explore"/>
       <SidebarRow Icon={BellIcon} title="Notifications"/>
       <SidebarRow Icon={MailIcon} title="Messages"/>
       <SidebarRow Icon={BookmarkIcon} title="Home"/>
       <SidebarRow Icon={CollectionIcon} title="Lists"/>
       <SidebarRow Icon={UserIcon} title="Sign in"/>
       <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  )
}
