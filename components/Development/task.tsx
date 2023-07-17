import React from 'react';

function Task() {
  return (
      <div className='text-black box-border p-3 h-96 w-full border-8 border-slate-300 rounded-lg'>
        <div className='space-x-3'>
          <h2 className='text-4xl font-bold'>Task Assigned</h2>
          <div className='text-3xl mt-6 overflow-y-auto w-full h-64 sm:Overflow-x-auto'>
            <div className='flex flex-col space-y-2'>
               <li className='box-border  border-orangee bg-orangee  hover:bg-orange-500 h-10 w-4/6 bg-cream rounded-lg'>
                <span className="w-3/4">Task 1</span>
                <button className="ml-auto px-3 py-1 bg-blue-500 text-white rounded-lg">Button</button>
              </li>
              <li className='box-border  border-orangee bg-orangee  hover:bg-orange-500 h-10 w-4/6 bg-cream rounded-lg'>Task 2</li>
              <li className='box-border  border-orangee bg-orangee  hover:bg-orange-500 h-10 w-4/6 bg-cream rounded-lg'>Task 3</li>
              <li className='box-border  border-orangee bg-orangee  hover:bg-orange-500 h-10 w-4/6 bg-cream rounded-lg'>Task 4</li>
              <li className='box-border  border-orangee bg-orangee  hover:bg-orange-500 h-10 w-4/6 bg-cream rounded-lg'>Task 5</li>
              <li className='box-border  border-orangee bg-orangee  hover:bg-orange-500 h-10 w-4/6 bg-cream rounded-lg'>Task 6</li>
              <li className='box-border  border-orangee bg-orangee  hover:bg-orange-500 h-10 w-4/6 bg-cream rounded-lg'>Task 7</li>
              <li className='box-border  border-orangee bg-orangee  hover:bg-orange-500 h-10 w-4/6 bg-cream rounded-lg'>Task 8</li>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Task;

