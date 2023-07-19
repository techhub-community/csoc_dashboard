import React from "react";
import { BsHexagon } from "react-icons/bs";
const badges = 6;
export const Badges = () => {
  
  return (
    <>
      <div className="text-lightblack  mt-0 md:mt-28  h-max md:h-80 w-full md:w-1/3 p-3 bg-whitish mx-0 md:mx-2 my-4 rounded-xl">

        <h1 className=" text-5xl md:text-5xl font-bold ml-4 md:ml-0">
          Badges <span className="text-whitish">ex</span>
        </h1>
        <div className="flex flex-row justify-between items-center gap-x-20 mt-8">
          <h1 className="text-9xl ml-8 md:ml-0 ">{badges}</h1>
          <BsHexagon className="h-40 w-40 text-badge" />
        </div>
      </div>
    </>
  );
};
