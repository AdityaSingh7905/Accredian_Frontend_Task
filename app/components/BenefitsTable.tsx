"use client";
import * as React from "react";
import ProgramList from "./ProgramList";
import { ChevronDown } from "lucide-react";
import { ReferralContext } from "../utils/ReferralContextProvider";
import { useContext } from "react";
import ModalOverlay from "../ui/ModalOverlay";
import Form from "../ui/Form";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

function BenefitsTable() {
  const { isModalOpen, setIsModalOpen } = useContext(ReferralContext);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
  };
  return (
    <>
      <section id="benefits" className="mx-auto mt-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          What Are The <span className="text-blue-600">Referral Benefits?</span>
        </h2>

        <div className="w-[1200px] max-w-full mx-auto md:w-[760px] lg:w-[1000px] xl:w-[1200px] flex justify-end">
          <div className="w-[125px] h-[17px] flex items-center gap-8 bg-white">
            <span className="text-gray-700 text-sm font-semibold whitespace-nowrap">
              Enrolled
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div
                className="w-10 h-5 bg-white border-2 border-blue-600 rounded-full 
        peer-checked:bg-blue-600 peer-checked:border-blue-600 
        peer-focus:ring-4 peer-focus:ring-blue-300 after:content-[''] 
        after:absolute after:top-0.5 after:left-[2px] after:bg-blue-600 
        after:border-blue-600 after:border after:rounded-full 
        after:h-4 after:w-4 after:transition-all 
        peer-checked:after:translate-x-5 peer-checked:after:bg-white 
        peer-checked:after:border-white"
              ></div>
            </label>
          </div>
        </div>

        <div className="mt-2 flex mx-auto gap-5 w-full max-w-[1200px] xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[760px]">
          <div className="hidden lg:block">
            <ProgramList />
          </div>

          <div className="flex-grow">
            <div
              className="w-full shadow-lg rounded-xl overflow-auto"
              style={{ boxShadow: "0px 4px 29.3px 0px #3C3C3C26" }}
            >
              <div className="flex bg-[#1A73E859] text-[#1350A0] font-semibold py-2.5 px-6">
                <div className="w-1/2">Programs</div>
                <div className="w-[1px] bg-white h-6 mx-4"></div>
                <div className="w-1/4 text-center">Referrer Bonus</div>
                <div className="w-[1px] bg-white h-6 mx-4"></div>
                <div className="w-1/4 text-center">Referee Bonus</div>
              </div>

              <div className="bg-[#EBF3FF59] px-6 py-4">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="flex items-center py-3 xl:py-2.5 lg:py-1"
                  >
                    <div className="w-1/2 flex items-center gap-2 xl:gap-2 lg:gap-1">
                      <img
                        src="/education-cap.png"
                        alt="Icon"
                        className="w-5 h-5"
                      />
                      <p className="text-gray-700">{program.name}</p>
                    </div>

                    <div className="w-[1px] bg-gray-300 h-6 mx-4"></div>

                    <p className="w-1/4 text-center text-gray-700">
                      {program.referrerBonus}
                    </p>

                    <div className="w-[1px] bg-gray-300 h-6 mx-4"></div>

                    <p className="w-1/4 text-center text-gray-700">
                      {program.refereeBonus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1200px] max-w-full mx-auto md:w-[760px] lg:w-[1000px] xl:w-[1200px]">
          <div className="mt-6 flex justify-end items-center">
            <button className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-gray-500 border border-gray-400 rounded-lg">
              Show More
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="px-16 py-4 text-xl text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            onClick={onClickHandler}
          >
            Refer Now
          </button>
        </div>
      </section>
      {/* Modal */}
      <ModalOverlay isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form />
      </ModalOverlay>
    </>
  );
}

export default BenefitsTable;
