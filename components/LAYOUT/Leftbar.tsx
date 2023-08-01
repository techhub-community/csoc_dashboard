import React from "react";

import Image from "next/image";

const Leftbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 bg-whitish w-24 md:w-1/5 mdp-4 hidden md:block ">
      <div className="flex items-center justify-center mb-8 o">
        <div className="flex items-center">
          <Image
            className=" h-0 md:h-auto max-w-0 md:max-w-full mt-0 md:mt-4 "
            src="/logo1.png"
            alt="me"
            width={210}
            height={60}
          />
        </div>
      </div>
      <div className="space-y-4">
        <button className="mt-4 md:mt-0 w-36 md:w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded">
          DSA
        </button>
        <button className="w-36 md:w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded">
          DEVELOPMENT
        </button>
        <button className="w-36 md:w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded">
          RESOURCES
        </button>
      </div>
    </div>
  );
};

export default Leftbar;
