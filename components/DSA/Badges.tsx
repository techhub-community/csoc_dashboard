import React from 'react'
import { BsHexagon } from 'react-icons/bs';

export const Badges = () => {
  return (
    <>
    <div className='text-lightblack box-border mt-0 md:mt-24  h-max md:h-80 w-max md:w-2/6 border-8 border-white p-3 bg-[#fef9f4] rounded-lg'>  
    <div> 
       <h1 className=' text-5xl md:text-5xl font-bold ml-4 md:ml-0'>Badges <span className='text-[#fef9f4]'>extrasl!</span></h1> 
       <div className='flex flex-row space-between items-center space-x-24 mt-8'>
        <h1 className='text-9xl ml-8 md:ml-0'>0</h1>
        <BsHexagon size={120} color="#FE995C" /> 
        
       </div>
       </div> 
        </div>
        </>
  )
}
