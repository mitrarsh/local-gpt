import SideBar from './sidebar/SideBAr'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout