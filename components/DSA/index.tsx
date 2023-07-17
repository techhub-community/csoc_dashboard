import React from 'react'
import { Badges } from './Badges'
import { Problem } from './Problem'
import { Submission } from './Submission'

const DSA: React.FC<{}> = () => {
  return ( 
    <div className=''>
   
    <div className='ml-0 md:ml-64'>
    <div className='ml-0 md:ml-10'>
      <div className='flex flex-col md:flex-row'>
       
      <Problem/>
      <Badges/>
      </div>
      <Submission/>
      </div>

    </div>
    </div>
  )
}

export default DSA
