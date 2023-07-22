import React from 'react'
import Leftbar from './Leftbar'
import Navbar from './Navbar'

const Layout:React.FC<{children:React.ReactNode}>=({children})=> {
  return (
    <div>
      <Leftbar/>
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
