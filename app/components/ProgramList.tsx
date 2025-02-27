"use client";
import * as React from "react";
import { ChevronRight } from "lucide-react";

const programs = [
  { name: "PRODUCT MANAGEMENT" },
  { name: "STRATEGY & LEADERSHIP" },
  { name: "BUSINESS MANAGEMENT" },
  { name: "FINTECH" },
  { name: "SENIOR MANAGEMENT" },
  { name: "DATA SCIENCE" },
  { name: "DIGITAL TRANSFORMATION" },
  { name: "BUSINESS ANALYTICS" },
];

function ProgramList() {
  return (
    <div className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden max-md:hidden">
      <button className="w-full px-6 py-4 flex justify-between items-center text-white bg-blue-600 font-semibold text-left">
        ALL PROGRAMS
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <ul className="divide-y divide-gray-400 overflow-auto h-[calc(100%-56px)]">
        {programs.map((program, index) => (
          <li key={index}>
            <a
              href="/right-arrow.png"
              className="flex justify-between items-center px-6 py-4 text-gray-800 hover:bg-gray-100"
            >
              {program.name}
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramList;
