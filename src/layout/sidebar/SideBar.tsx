import React from 'react'
import ChatsList from './ChatsList'

const SideBar = () => {
  return (
    <div className='hidden md:block sidebar'>
      <h3>Chats</h3>
        <ChatsList/>
    </div>
  )
}

export default SideBar