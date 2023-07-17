import React from 'react'
import Image from 'next/image'
function Member() {
  return (
    
      
      <div className="flex justify-end mr-[1.5vw] mt-[5.3vw] rounded-lg ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#fef9f4]">
      <Image
          className="h-auto max-w-full mt-4" 
          src="/community.png"
          alt="me"
          width={330}
          height={40}
        />

        <div className="px-3 py-1 ">
          <div className="font-bold text-xl text-black mb-1">Team Members</div>
          <div>
            <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-6 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Member 1" readOnly/>
          </div>
          <div>
            <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-6 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Member 2" readOnly />
          </div>
          <div>
            <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-6 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Member 3" readOnly/>
          </div>
        </div>
       
      </div>




    </div>
  )
}

export default Member
