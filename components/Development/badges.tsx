import React from 'react';
import {BsHexagon} from 'react-icons/bs';
function Badges() {
  return (
    <div className ="text-black box-border h-80 w-2/5 mt-20 border border-black rounded-lg">
      <div >
        <h2 className="text-5xl font-bold mt-2 ml-3">Badges</h2>
        <div className='flex flex-row space-between items-center md:space-x-60 space-x-10 ml-8'>
            <h1 className='text-8xl ml-6'>0</h1>
            <BsHexagon size={150} color="#FE995C" />
        </div>
        </div>
        </div>
  );
}

export default Badges;