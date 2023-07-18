import React from "react";
import Image from "next/image";

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <nav className="sticky top-1 left-0 right-1 bg-white bg opacity-95 p-4  z-10">
        <div className="container mx-auto flex justify-start items-center">
          <div className="text-white font-bold text-lg"></div>
          <div className="space-x-4 ">
            <Image
              className="h-auto max-h-12 "
              src="/logo1.png"
              alt="me"
              width={150}
              height={50}
            />
          </div>
        </div>
      </nav>
        {/* image section */}
      <div className="relative mt-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-40 z-0" />
        <Image
          src="/2.jpg"
          alt="me"
          className="w-full"
          width={800}
          height={100}
        />
       
        <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-col z-10">
            <div className="md:h-3/5 h-1/3  "></div>
            <div className="flex flex-row ">
                <div className="md:w-12 w-3"></div>
            <div className="flex flex-col">
          <div className="w-full md:w-3/4 font-bold md:text-4xl  text-lg">Login</div>
          <div className="w-full md:w-3/4 flex flex-row">
            <a
              href="#"
              className="text-sm  md:text-xl text-white hover:text-orangee "
            >
              Home
            </a>{" "}
            /{" "}
            <a
              href="#"
              className="text-sm  md:text-xl text-white hover:text-orangee"
            >
              Login
            </a>
            </div>
            </div>
          </div>
        </div>
      </div>
     

      {/* Content Section */}
      <section className="flex flex-col items-center justify-center bg-nav_color bg-cover h-80">
        <div className="w-full h-4 flex items-center justify-center ">
          <div className="max-w-sm w-full md:max-w-2xl overflow-hidden">
            <div className="px-6 py-0">
              
              <div className="text-gray-700 text-base">
                
                <form className="bg-white rounded-lg p-4 mt-6">
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orangee"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orangee"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <a
                      href="#"
                      className="text-sm text-orangee hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-orange2 text-white font-semibold rounded hover:bg-orangee"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
