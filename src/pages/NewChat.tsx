
import { useEffect } from 'react'
import Chatbox from '../components/ui/Chatbox'
import UseChatStore from '../store/chatStore'

const NewChat = () => {
  const setActiveChat=UseChatStore((s)=>s.setActiveChat)
  useEffect(()=>{
    setActiveChat(null)
  },[setActiveChat])
  return (
    <div className='flex-1'>
      <Chatbox/>
    </div>
  )
}

export default NewChat