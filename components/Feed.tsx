import { RefreshIcon } from '@heroicons/react/outline'
import {useState} from 'react'
import TweetBox from './TweetBox'
import {Tweet} from '../typings'
import TweetComponent from './TweetComponent'
import {fetchTweets} from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}
function Feed({tweets: tweetsProps}: Props) {

  const [tweets, setTweets] = useState<Tweet[]>(tweetsProps)
  const handleRefresh  = async ()=>{
    const refreshToast = toast.loading('Refreshing...');
    const  tweets = await fetchTweets();
    setTweets(tweets);
    toast.success('Feed Updated!', {
      id: refreshToast
    })
  }
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
      <div>{toast}</div>
        <div className=' flex items-center justify-between'>
            <h1 className='pb-0 p-5 text-xl font-bold'>Home</h1>
            <RefreshIcon 
            onClick={handleRefresh}
             className='h-8 w-8 text-twitter
              cursor-pointer mt-5 mr-5 transition-all
              duration-500 ease-out hover:rotate-180 active:scale-125' 
              />
        </div>

        {/* Tweet box */}
       <div>
       <TweetBox />
       </div>

       {/* feed */}
       <div>
        {
          tweets.map((tweet)=>(
             <TweetComponent key={tweet._id} tweet={tweet} />
          ))
        }
       
       </div>
    </div>
  )
}

export default Feed