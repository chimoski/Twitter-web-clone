import React, { useState } from 'react'
// import icons
import {
   LocationMarkerIcon,
   PhotographIcon,
   SearchCircleIcon,
   EmojiHappyIcon,
   CalendarIcon
  } from '@heroicons/react/outline'

function TweetBox() {
    const [input, setInput] = useState<string>('');

  return (
    <div className='flex space-x-2 p-5'>
        <img 
        className='mt-4 h-14 w-14 rounded-full object-cover' 
        src="https://links.papareact.com/gll" alt="" />

        <div  className='flex  flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'  >
                <input type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='h-24 w-full text-xl outline-none placeholder:text-xl'
                placeholder="What's happening ?"/>
                <div className="flex items-center">
                    <div className='flex space-x-2 text-twitter flex-1 '>
                        <PhotographIcon  className='h-5 w-5 cursor-pointer
                        transition-transform duration-150 ease-out hover:scale-150
                        ' />
                       <SearchCircleIcon  className='h-5 w-5 cursor-pointer'/>
                       <EmojiHappyIcon  className='h-5 w-5 cursor-pointer'/>
                       <CalendarIcon  className='h-5 w-5  cursor-pointer'/>
                       <LocationMarkerIcon  className='h-5 w-5 cursor-pointer' />
                    </div>
                    <button
                    disabled={!input}
                     className='bg-twitter disabled:opacity-50  px-5 py-2 font-bold text-white rounded-full'>Tweet</button>
                    
                </div>
            </form>

        </div>
    </div>
  )
}

export default TweetBox