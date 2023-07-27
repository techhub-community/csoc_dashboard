import React from 'react'
import {dsaSourceItem} from "@/constant/Resources/Dsa_resources";
import Link from 'next/link';
export default function Dsa() {
  const commonStyle = 'box-border p-3 bg-cream rounded-lg ml-2';
  return (
    <>
      <div className="text-lightblack p-3 h-max md:h-full w-max md:w-1/2  rounded-lg bg-whitish my-2 mr-3 md:mr-2">
        <h2 className="text-4xl font-bold ml-0 md:ml-0">DSA Resources <span className='text-whitish'>with do</span> </h2>
        <div className="text-3xl mt-6 overflow-y-auto w-6/6 h-max sm:Overflow-x-auto">
          <div className="flex flex-col space-y-2">
            {dsaSourceItem?.map((dsaSourceItem, index) => (
              <span key={index} className={commonStyle}>
                  <Link href={dsaSourceItem.link} key={index}>
                    {dsaSourceItem.name}
                  </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}