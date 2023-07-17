import React from 'react';

function ProgressTask() {
  return (
    <div className="text-black box-border h-80 w-3/5 mt-20 border border-black overflow-y-scroll relative rounded-lg">

      <div>
        <h2 className="text-5xl font-bold  mt-2 ml-3">Progress Status</h2>
      </div>
      {/* Timeline */}
      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-8">
        <div className="border-l-2 mt-10">
          {/* Card 1 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  border-orangee bg-orangee  text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* Dot Following the Left Vertical Line */}
            <div className="w-5 h-5 bg-orangee absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* Line that connects the box with the vertical line */}
            <div className="w-10 h-1 bg-orangee absolute -left-10 z-0"></div>

            {/* Content shown in the box */}
            <div className="flex-auto ">
              <h1 className="text-lg">Task 1</h1>
              <h1 className="text-xl font-bold">Install VS CODE</h1>
              <h3>URL Link</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  border-orangee bg-orangee  text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5  bg-orangee absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1  bg-orangee absolute -left-10 z-0"></div>
            <div className="flex-auto">
              <h1 className="text-lg">Task 2</h1>
              <h1 className="text-xl font-bold">Make A GitHub Account</h1>
              <h3>URL Link</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  border-orangee bg-orangee  text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5  bg-orangee absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1  bg-orangee absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Task 3</h1>
              <h1 className="text-xl font-bold">Solve DSA Problem</h1>
              <h3>URL Link</h3>
            </div>
            </div>

          {/* Card 4 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  border-orangee bg-orangee  text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5  bg-orangee absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1  bg-orangee absolute -left-10 z-0"></div>
            <div className="flex-auto">
              <h1 className="text-lg">Task 4</h1>
              <h1 className="text-xl font-bold">HTML</h1>
              <h3>HTML Resources Link</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  border-orangee bg-orangee  text-black rounded mb-10 flex-col md:flex-row">
            <div className="w-5 h-5  bg-orangee absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

            <div className="w-10 h-1  bg-orangee absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Task 5</h1>
              <h1 className="text-xl font-bold">CSS</h1>
              <h3>CSS Resources Link</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressTask;
