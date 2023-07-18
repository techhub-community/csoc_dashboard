import React from 'react';
import Badges from './badges';
import ProgressTask from './progessTask';
import Task from './task';

function Development() {
  return (
      <div className="md:ml-[20.5%]">
    <div className="flex flex-col h-screen ">
      <div className="flex flex-col md:flex-row md:items-center md:gap-4">
        <ProgressTask />
        <Badges />
      </div>
       <Task />
     </div>
    </div>
  );
}

export default Development;