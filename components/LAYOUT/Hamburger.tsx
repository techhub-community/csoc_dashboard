import React from 'react'
import { useState } from "react";

const commonStyle = "w-36 md:w-full py-2 px-4 bg-orangee hover:bg-orange-500 text-white rounded";

export default function Hamburger() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <>
        <div className="fixed top-0 left-0 bottom-0 bg-whitish w-0 mdp-4 rounded-lg ">
            <div className="w-40 h-56 ">
                <button
                    className="block lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="h-12 w-12 text-gray-600 mt-4 ml-4 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
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
                    className={`gap-y-4 mt-1 ${isMenuOpen ? "block" : "hidden lg:block"
                        }`}
                >
                    <div className="bg-whitish space-y-5 p-2 h-full">
                        <button className={commonStyle}>
                            DSA
                        </button>
                        <button className={commonStyle}>
                            DEVELOPMENT
                        </button>
                        <button className={commonStyle}>
                            RESOURCES
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
