import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
        {/* SEARCH */}
        <div className='flex items-center space-x-2 
        mt-2
        rounded-full bg-gray-100 p-3'>
            <SearchIcon  className='h-5  text-gray-400'/>
            <input type="text" 
            className="bg-transparent flex-1 outline-none"
            placeholder='search twitter' />
        </div>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="sonnySangha"
        options={{ height: 1000 }}
        />
    </div>
  )
}

export default Widgets