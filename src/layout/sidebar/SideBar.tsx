import React from 'react'
import ChatsList from './ChatsList'

const SideBar = () => {
  return (
    <div className='hidden md:block sidebar'>
        <ChatsList/>
    </div>
  )
}

export default SideBar