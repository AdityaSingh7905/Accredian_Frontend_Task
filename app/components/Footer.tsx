"use client";
import * as React from "react";
import LeftFooter from "./LeftFooter";
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";

function Footer() {
  return (
    <footer id="support" className="w-full bg-zinc-800 py-10 mt-16 text-white">
      <div className="w-full mx-auto px-6 xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[760px]">
        <div className="flex justify-between items-start flex-wrap">
          <div>
            <h3 className="text-3xl font-bold">accredian</h3>
            <p className="text-sm">Credentials that Matter</p>
          </div>

          <div className="flex flex-col items-center">
            <button className="px-6 py-2 bg-blue-600 rounded-lg font-medium">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-sm mt-1">Speak with our Learning Advisor</p>
          </div>
        </div>

        <hr className="mt-6 border-gray-400" />

        <div className="flex flex-wrap mt-6">
          <div className="w-full md:w-[30%] p-6 hidden md:block">
            <LeftFooter />
          </div>

          <div className="w-full lg:w-[50%] md:w-[55%] p-4">
            <MiddleFooter />
          </div>

          <div className="w-full lg:w-[20%] md:w-[15%] p-4 hidden md:block">
            <RightFooter />
          </div>
        </div>

        <div className="text-center font-bold text-sm mt-6 sm:mt-2">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
