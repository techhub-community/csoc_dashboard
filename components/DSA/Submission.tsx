
import React from 'react'

export const Submission = () => {


  return ( <>
    <div className='text-lightblack box-border p-3 h-max md:h-96 w-5/5 border-8 rounded-lg border-white bg-[#fef9f4] '>
      <div className='space-x-3'>
        <h2 className='text-4xl font-bold ml-3 md:ml-0'>View All Submission</h2>
        <div className='text-3xl mt-6 overflow-y-auto w-6/6 h-64 sm:Overflow-x-auto '>
          <div className='flex flex-col space-y-2'>
          <li className=' box-border p-3  bg-cream rounded-lg'>valid Parenthesis</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Palindrome Number</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Happy Number</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Ugly number</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Array sorting</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Merge Two Sorted Lists</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Reverse Linked List II</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Middle of the Linked List</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Reverse Linked List I</li>
          <li className=' box-border p-3  bg-cream rounded-lg'>Find the Highest Altitude</li>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}
