import React from "react";

function Badge() {
  const Badge = 2;
  return (
    <div className=" flex justify-start mr-[2vw] mt-2 ml-1 md:ml-0 w-6/6 h-1/4 rounded-lg bg-nav_color shadow-lg  overflow-y-scroll ">
      <div className="max-w-sm rounded   ">
        <div className="px-3 py-6">
          <div className="font-bold text-xl text-black mb-1">Badges</div>
          <div className="font-bold text-xl text-black mb-1">Badges</div>
          <div className="font-bold text-xl text-black mb-1">Badges</div>
          <div className="font-bold text-xl text-black mb-1">Badges</div>
          <div className="font-bold text-xl text-black mb-1">Badges</div>
          <div className="font-bold text-xl text-black mb-1">Badges</div>

          <div className="font-bold text-xl text-black mb-1">{`${Badge}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Badge;
