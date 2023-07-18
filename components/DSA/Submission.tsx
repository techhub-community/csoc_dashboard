import React from "react";
import { submissions } from "@/constant/DSA/problem_name";
import { FaDotCircle } from 'react-icons/fa';

export const Submission = () => {
  const commonStyle = "box-border p-3  bg-cream rounded-lg w-full";

  return (
    <>
      <div className="text-lightblack  p-3 h-max md:h-96 w-full rounded-lg bg-whitish my-2 mr-2 md:mr-2 ">
        <h2 className="text-4xl font-bold ml-3 md:ml-0">View All Submission</h2>
        <div className="text-3xl mt-6 overflow-y-auto w-full h-64 sm:Overflow-x-auto">
          <div className="flex flex-col gap-y-2 ">
            {submissions.map((submissions, index) => (
              <ul className="flex flex-row gap-x-2 w-full " key={index}>
                <FaDotCircle className="text-2xl text-orange-500  mt-4 "/>
              <li  className={commonStyle}>
                {submissions}
              </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
