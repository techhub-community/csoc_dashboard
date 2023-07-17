import React from 'react';
import Badges from './badges';
import ProgressTask from './progessTask'; 
import Task from './task';

function Development() {
  return (
    <div style={{marginLeft:'300px'}}>
    <div className="flex flex-col h-screen">
      {/* Two boxes at the top */}
      
      <div className="flex space-x-4">
        <ProgressTask />
        <Badges />
      </div>

      {/* Box at the bottom */}
      <div className="mt-auto">
        <Task />
      </div>
    </div>
    </div>
  );
}

export default Development;




