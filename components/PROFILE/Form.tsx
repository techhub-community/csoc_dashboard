import React from 'react';

function Form() {
  return (
    <div className="flex flex-col justify-center items-start mt-[80px] ml-[21.5vw] ">
      <form className="w-full max-w-4xl bg-[#fef9f4] p-4 rounded-lg shadow-lg">
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " id="grid-first-name" type="text" placeholder="Jane" readOnly/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" readOnly/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-password">
        Email
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" readOnly/>
     
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-password">
        USN
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="Email" placeholder="******************" readOnly/>
     
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-password">
        Phone Number
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="USN" placeholder="******************" readOnly/>
     
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-password">
        Program
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="Program" placeholder="******************" readOnly/>
      
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-password">
        Your TechStack
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="Program" placeholder="******************" readOnly/>
     
    </div>
  </div>
 
  
  <div className="flex flex-wrap -mx-3 mb-1">
  <div className="w-full px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-password">
      Proficiency
    </label>
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <input
          id="bulletButton1"
          type="radio"
          value=""
          name="bullet-buttons"
          style={{ width: '1rem', height: '1rem', borderRadius: '50%', borderColor: '#D1D5DB', boxShadow: 'none' }}
          readOnly
        />
        <label
          htmlFor="bulletButton1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          style={{ color: '#000', cursor: 'pointer' }}
        >
          Beginner
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="bulletButton2"
          type="radio"
          value=""
          name="bullet-buttons"
          style={{ width: '1rem', height: '1rem', borderRadius: '50%', borderColor: '#D1D5DB', boxShadow: 'none' }}
          readOnly
        />
        <label
          htmlFor="bulletButton2"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          style={{ color: '#000', cursor: 'pointer' }}
        >
          Average
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="bulletButton2"
          type="radio"
          value=""
          name="bullet-buttons"
          style={{ width: '1rem', height: '1rem', borderRadius: '50%', borderColor: '#D1D5DB', boxShadow: 'none' }}
          readOnly
        />
        <label
          htmlFor="bulletButton2"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          style={{ color: '#000', cursor: 'pointer' }}
        >
          Good
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="bulletButton3"
          type="radio"
          value=""
          name="bullet-buttons"
          style={{ width: '1rem', height: '1rem', borderRadius: '50%', borderColor: '#D1D5DB', boxShadow: 'none' }}
          readOnly
        />
        <label
        
          htmlFor="bulletButton3"
          className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300"
          style={{ color: '#000', cursor: 'pointer' }}
        >
          Expert
        </label>
      </div>
    </div>
  </div>
</div>

      
  
  
  
</form>
    </div>
  );
}

export default Form;
