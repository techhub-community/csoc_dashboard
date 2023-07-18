import React from "react";
import Image from "next/image";
function Member() {
  const Style =
    "appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-6 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
  const type = "text";
  const Disable = true;
  const Team = [
    {
      placeholder: "Member 1",
    },
    {
      placeholder: "Member 2",
    },
    {
      placeholder: "Member 3",
    },
  ];
  return (
    <div className="flex justify-end mr-[2vw] mt-2 md:mt-28 ml-1 md:ml-0  ">
      <div className=" w-full rounded overflow-hidden shadow-lg bg-nav_color rounded-lg">
        <div className="flex justify-center">
          <Image
            className="h-auto   mt-4 ml-3 mr-3"
            src="/community.png"
            alt="me"
            width={250}
            height={30}
          />{" "}
        </div>

        <div className="px-3 py-1 ">
          <div className="font-bold text-xl text-black mb-1">Team Members</div>
          {Team?.map((item, index) => (
            <div key={index}>
              <input
                className={Style}
                type={type}
                placeholder={item.placeholder}
                readOnly={Disable}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Member;
