"use client";
import Link from "next/link";
import React from "react";

const TopBanner = () => {
  return (
    <>
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex w-full bg-[#EEF5FF] py-2 px-4 md:px-8 items-center justify-center text-sm md:text-base">
        <p className="text-gray-700 text-center">
          Navigate your ideal career path with tailored expert advice
        </p>
        <Link href="#" className="text-blue-600 font-semibold ml-2">
          Contact Expert
        </Link>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden w-full bg-[#EEF5FF] py-2 px-4 items-center justify-between text-sm">
        <p className="text-gray-700">
          Navigate your ideal career path with tailored expert advice
        </p>
        <Link
          href="#"
          className="text-blue-600 font-semibold whitespace-nowrap"
        >
          Contact Expert
        </Link>
      </div>
    </>
  );
};

export default TopBanner;
