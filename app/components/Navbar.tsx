"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const [navbarWidth, setNavbarWidth] = useState(1200); // Default for large screens

  useEffect(() => {
    const updateNavbarWidth = () => {
      const screenWidth = window.innerWidth;
      setScreenSize(screenWidth);
      if (screenWidth >= 1280) {
        setNavbarWidth(1200); // Extra-large screens
      } else if (screenWidth >= 1024) {
        setNavbarWidth(1000); // Large screens
      } else if (screenWidth >= 768) {
        setNavbarWidth(760);
      } else {
        setNavbarWidth(screenWidth - 40);
      }
    };
    updateNavbarWidth();
    window.addEventListener("resize", updateNavbarWidth);
    return () => window.removeEventListener("resize", updateNavbarWidth);
  }, []);
  return (
    <>
      {/* Desktop Navbar (Width >= 1024px) */}
      {screenSize >= 1024 && (
        <nav
          className="bg-white mx-auto mt-4"
          style={{ width: `${navbarWidth}px` }}
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-blue-600 leading-tight">
                  accredian
                </h1>
                <p className="text-sm text-gray-500 mt-[-4px]">
                  credentials that matter
                </p>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700"
                >
                  Courses <ChevronDown size={18} className="ml-1" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 1
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 2
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 3
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Refer & Earn
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Resources
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Try for Free
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Tablet Navbar (Width: 768px - 1024px) */}
      {screenSize >= 768 && screenSize < 1024 && (
        <nav
          className="bg-white mx-auto mt-4"
          style={{ width: `${navbarWidth}px` }}
        >
          <div className="w-[760px] flex items-center justify-between">
            {/* Left Section: Logo & Dropdown */}
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-blue-600 leading-tight">
                  accredian
                </h1>
                <p className="text-sm text-gray-500 mt-[-4px]">
                  credentials that matter
                </p>
              </div>

              {/* Courses Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700"
                >
                  Courses <ChevronDown size={18} className="ml-1" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 1
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 2
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 3
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right Section: Navigation Links & Buttons */}
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Refer
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Resources
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                About
              </Link>

              {/* Buttons */}
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Try for free
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Navbar (Width < 768px) */}
      {screenSize < 768 && (
        <>
          <nav className="w-full bg-white py-2 px-6 flex items-center justify-between">
            <div className="flex flex-col">
              <div className="text-left">
                <h1 className="text-2xl font-bold text-blue-600 leading-tight">
                  accredian
                </h1>
                <p className="text-sm text-gray-500 mt-[-4px]">
                  credentials that matter
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
                >
                  Explore
                  <span
                    className={`ml-1 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 mt-2 w-48 bg-white border rounded-md shadow-lg z-50"
                    style={{ transform: "translateX(-50%)", maxWidth: "90vw" }}
                  >
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 1
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 2
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Course 3
                    </Link>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  document.body.style.overflow = isOpen ? "auto" : "hidden"; // Disable scrolling when modal is open
                }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center z-50">
              <div className="bg-white shadow-md py-6 px-8 rounded-lg w-3/4 max-w-md text-center relative">
                <button
                  className="absolute top-4 right-4 text-gray-600"
                  onClick={() => {
                    setIsOpen(false);
                    document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
                  }}
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col space-y-4">
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Refer & Earn
                  </Link>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    Resources
                  </Link>
                  <Link href="#" className="text-gray-700 hover:text-blue-600">
                    About Us
                  </Link>
                  <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300">
                    Login
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Try for Free
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
