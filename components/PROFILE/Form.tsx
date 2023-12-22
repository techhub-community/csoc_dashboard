import React from "react";
import {value} from "@/constant/PROFILE/form"
const Style1 = "flex flex-wrap -mx-3 mb-1";
  const Style2 = "w-full px-3";
  const Style3 =
    "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1";

    const Style4 =
    "appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
function Form() {
  return (
    <div className="flex flex-col justify-center items-start mt-28 ml-1 mr-1 md:ml-[21.5vw]">
      <form className="w-full max-w-4xl bg-nav_color p-4 rounded-lg shadow-lg">
        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              readOnly
            />
          </div>
        </div>
        {value?.map((item, index) => (
          <div className ={Style1} key={index}>
              <div className={Style2}>
                <label className={Style3} htmlFor="grid-password">
                  {item.placeholder}
                </label>
                <input
                  className={Style4}
                  id="grid-password"
                  type="text"
                  placeholder={item.placeholder}
                  readOnly
                />
              </div>
            </div>
        ))}
      </form>
    </div>
  );
}

export default Form;
