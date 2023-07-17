import React from 'react';
import Image from 'next/image';

const Leftbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 bg-[#fef9f4] w-1/5 p-4">
      <div className="flex items-center justify-center mb-8">
        
     
  
  
  <Image
          className="h-auto max-w-full mt-4" 
          src="/logo1.png"
          alt="me"
          width={210}
          height={60}
        />

      </div>
      <div className="space-y-4 mt-10">
        <button className="w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded">
          DSA
        </button>
        <button className="w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded">
          DEVELOPMENT
        </button>
        <button className="w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded">
          RESOURCES
        </button>
      </div>
    </div>
  );
};

export default Leftbar;




