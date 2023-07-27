import React from "react";

function Form() {
  const Style1 = "flex flex-wrap -mx-3 mb-1";
  const Style2 = "w-full px-3";
  const Style3 =
    "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1";
  const Value = [
    {
      placeholder: "Email",
    },
    {
      placeholder: "USN",
    },
    {
      placeholder: "Phone Number",
    },
    {
      placeholder: "Program",
    },
    {
      placeholder: "Your TechStack",
    },
  ];
  const Style4 =
    "appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

  const proficiencyOptions = [
    { label: "Beginner", id: "inline-radio" },
    { label: "Average", id: "inline-2-radio" },
    { label: "Good", id: "inline-checked-radio1" },
    { label: "Expert", id: "inline-checked-radio2" },
  ];

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
        {Value?.map((item, index) => (
          <div key={index}>
            <div className={Style1}>
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
          </div>
        ))}
        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="grid-password"
            >
              Proficiency
            </label>
            <div className="flex xs:flex-col items-center ">
              {proficiencyOptions.map((option) => (
                <div
                  className="flex items-center xs:flex-col mr-4"
                  key={option.id}
                >
                  <input
                    id={option.id}
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4 text-orangee accent-orangee xs:flex-col bg-gray-100 border-gray-300  "
                  />
                  <label
                    htmlFor={option.id}
                    className="ml-2 text-sm font-medium xs:flex-col text-gray-900 dark:text-gray-300"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
