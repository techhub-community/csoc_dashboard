import React from "react";
import { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="fixed top-2 left-0 right-2 bg-whitish bg opacity-95 p-4 ml-[20.5%] rounded-[30px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">
          {/* <Image
            className=" block md:hidden h-full w-5/6"
            src="/logo1.png"
            alt="me"
            width={210}
            height={60}
          /> */}
          </div>
          <div className="space-x-4">
          
            <button className="rounded-lg p-3 border-2 border-orangee bg-orangee hover:bg-orange-500 text-lg">
              Logout
            </button>
          </div>
        </div>
        
      </nav>

      <div className="fixed top-0 left-0 bottom-0 bg-whitish w-0 mdp-4 block md:hidden rounded-lg ">
        <div className="w-40 h-80">
          <button
            className="block lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-12 w-12 text-gray-600 mt-4 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  className="bg-black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div
            className={`space-y-4 mt-1 ${
              isMenuOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-whitish space-y-5 p-2">
              <button className="mt-4 md:mt-0 w-36 md:w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded ">
                DSA
              </button>
              <button className="w-36 md:w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded">
                DEVELOPMENT
              </button>
              <button className="w-36 md:w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded">
                RESOURCES
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
