import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import tasks1 from "@/constants/Development/taskData";

function Task() {
  return (
    <div className="text-cream box-border p-3 h-96 w-full bg-whitish my-2 rounded-lg">
      <h2 className="text-lightblack text-4xl font-bold">Task Assigned</h2>
      <div className="text-3xl mt-6 overflow-y-auto w-full h-64">
        <div className="flex flex-col space-y-5">
         
          {tasks1.map((task1, index) => (
            <div key={index} className="flex items-center">
              <div className="box-border border-orangee bg-orangee hover:bg-orange-500 h-11 w-5/6 bg-cream rounded-lg">
                <span className="w-3/4 px-3">{task1}</span>
              </div>
              <button className="ml-2 px-3 py-1 box-border border-orangee bg-orangee hover:bg-orange-500 rounded-lg">
                Submit
              </button>
              <GiSandsOfTime className="text-grey w-10 h-10 md:w-10 md:h-10" />
              <AiOutlineCheckCircle className="text-grey w-10 h-10 md:w-10 md:h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task;
