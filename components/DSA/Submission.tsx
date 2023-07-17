import React from "react";
import { submissions } from "@/constant/DSA/problem_name";

export const Submission = () => {
  const commonStyle = "box-border p-3  bg-cream rounded-lg";

  return (
    <>
      <div className="text-lightblack  p-3 h-max md:h-96 w-6/6 rounded-lg bg-whitish my-2 mr-0 md:mr-2 ">
        <h2 className="text-4xl font-bold ml-3 md:ml-0">View All Submission</h2>
        <div className="text-3xl mt-6 overflow-y-auto w-6/6 h-64 sm:Overflow-x-auto ">
          <div className="flex flex-col space-y-2">
            {submissions.map((submissions, index) => (
              <li key={index} className={commonStyle}>
                {submissions}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
