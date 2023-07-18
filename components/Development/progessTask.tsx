import React from "react";
import tasks from "@/constants/Development/progressTaskData";

function ProgressTask() {
  return (
    <div className="text-lightblack mt-20 h-80  w-full md:h-80  md:w-3/5 overflow-y-scroll bg-whitish my-4 rounded-lg">
      <div>
        <h2 className="text-5xl font-bold mt-2 ml-3">Progress Status</h2>
      </div>
      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-9">
        <div className="border-l-2 mt-10">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 border-orangee bg-orangee  hover:bg-orange-500 text-whitish rounded mb-10 flex-col md:flex-row gap-4 md:gap-0"
            >
              <div className="w-5 h-5 bg-orangee absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-10 h-1 bg-orangee absolute -left-10 z-0"></div>
              <div className="flex-auto">
                <h1 className="text-lg">{task.title}</h1>
                <h1 className="text-xl font-bold">{task.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressTask;
