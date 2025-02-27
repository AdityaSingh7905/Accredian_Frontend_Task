"use client";

import * as React from "react";
import CTASection from "./CTASection";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQSection() {
  return (
    <section
      id="faqs"
      className="mx-auto mt-16 px-4 md:px-0 w-full md:w-[760px] lg:w-[1000px] xl:w-[1200px]"
    >
      <h2 className="text-3xl font-semibold leading-tight text-gray-900 text-center">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-5 mt-16">
        <div className="hidden lg:block lg:w-[20%] space-y-5">
          <button className="w-full px-4 py-3 text-blue-600 font-bold leading-loose rounded-lg border-2 border-solid border-blue-100 shadow-lg">
            Eligibility
          </button>
          <button className="w-full px-4 py-3 text-gray-500 font-bold leading-loose rounded-lg border-2 border-solid border-gray-500">
            How to Use?
          </button>
          <button className="w-full px-4 py-3 text-gray-500 font-bold leading-loose rounded-lg border-2 border-solid border-gray-500">
            Terms & Conditions
          </button>
        </div>

        <div className="w-full lg:w-[80%] space-y-6">
          <div className="relative p-2 bg-white">
            <p className="lg:pr-6 pr-10 text-base leading-tight font-bold text-blue-500">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </p>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600">
              <ChevronUp className="w-5 h-5" />
            </div>
          </div>

          <div className="relative p-2 bg-white">
            <p className="lg:pr-6 pr-10 text-base leading-tight text-gray-700">
              No, the program is designed to be inclusive of all levels of
              experience. All topics will be covered from the basics, making it
              suitable for individuals from any field of work.
            </p>
          </div>

          <div className="relative p-2 bg-white">
            <p className="lg:pr-6 pr-10 text-base leading-tight font-bold text-gray-700">
              What is the minimum system configuration required?
            </p>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </section>
  );
}

export default FAQSection;
