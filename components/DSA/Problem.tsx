import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { linebar } from "@/constant/DSA/problem_stats";
const percentage = 10; //percentage
export const Problem = () => {
 

  return (
    <>
      <div className="text-lightblack mt-28 h-max md:h-80 w-full md:w-2/3 p-3 bg-whitish my-4  rounded-lg">
        <h1 className="text-4xl font-bold mb-4 ml-4 md:ml-0">
          Solved Problems <span className="text-whitish">ext</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-x-0 md:gap-x-16">
          <div className="w-48 h-48 mr-8">
            <div className="relative h-full">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={15}
                styles={{
                  path: {
                    stroke: "#FF904D",
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#FFBD58",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: "#FE995C",
                    fontSize: "14px",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {linebar?.map((data, index) => (
              <div key={index}>
                <h1 className="text-xl font-bold mb-2">{data.title}</h1>
                <div className="h-6 w-80 bg-free rounded-full">
                  <div
                    className="h-full bg-easy rounded-full"
                    style={{ width: `${data.score}` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
