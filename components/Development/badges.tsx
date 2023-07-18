import React from 'react';
import { BsHexagon } from 'react-icons/bs';

function Badges() {
  return (
    <div className="text-lightblack h-auto w-full mt-3 md:h-80  md:w-2/5  md:mt-20 bg-whitish mx-0 md:mx-2 my-4 rounded-lg">
      <h2 className="text-5xl font-bold mt-2 ml-3">Badges</h2>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-8xl ml-6">0</h1>
        <BsHexagon className="text-orange2 w-20 h-20 md:w-56 md:h-56" />
      </div>
    </div>
  );
}

export default Badges;
