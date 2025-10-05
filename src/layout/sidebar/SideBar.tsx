
import UseChatStore from '../../store/chatStore'
import ChatsList from './ChatsList'

const SideBar = () => {
    const setActiveChat=UseChatStore((s)=>s.setActiveChat)
  return (
    <div className='hidden md:block sidebar'>
      <div className='flex justify-between'>
        <h3>Chats</h3>
        <p className='cursor-pointer' onClick={()=>{setActiveChat(null)}}>📝</p>
      </div>
        <ChatsList/>
    </div>
  )
}

export default SideBar