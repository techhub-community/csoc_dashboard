import React from 'react'
import Leftbar from './Leftbar'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
function Layout() {
  return (
    <div>
      <Navbar/>
      <div className='hidden md:block'>
      <Leftbar/>
      </div>
      <div className='block md:hidden'> <Hamburger/></div>
     

    </div>
  )
}

export default Layout
