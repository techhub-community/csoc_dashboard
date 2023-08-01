import React from "react";
import { BsHexagon } from "react-icons/bs";

export const Badges = () => {
  const badges = 7;
  return (
    <>
      <div className="text-lightblack  mt-0 md:mt-28  h-max md:h-80 w-6/6 md:w-2/6 p-3 bg-whitish mx-0 md:mx-2 my-4 rounded-xl">

        <h1 className=" text-5xl md:text-5xl font-bold ml-4 md:ml-0">
          Badges <span className="text-whitish">ex</span>
        </h1>
        <div className="flex flex-row space-between items-center space-x-20 mt-8">
          <h1 className="text-9xl ml-8 md:ml-0">{`${badges}`}</h1>
          <BsHexagon className="h-40 w-40 text-badge" />
        </div>
      </div>
    </>
  );
};
