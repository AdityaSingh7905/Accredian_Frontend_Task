"use client";
import { useState } from "react";
import { Link } from "react-scroll";

export default function ScrollNav() {
  const [active, setActive] = useState("refer");

  const navLinks = [
    { id: "refer", label: "Refer" },
    { id: "benefits", label: "Benefits" },
    { id: "faqs", label: "FAQs" },
    { id: "support", label: "Support" },
  ];

  return (
    <nav className="w-full flex justify-center mt-6">
      <div
        className="bg-[#EEF5FF] h-[60px] w-full md:w-1/2 px-6 py-1 rounded-[32px] 
                      shadow-md flex items-center justify-around text-gray-700 font-semibold text-lg"
      >
        {navLinks.map((link) => (
          <div
            key={link.id}
            className="relative flex flex-col items-center h-8 justify-center"
          >
            <Link
              to={link.id}
              smooth={true}
              duration={500}
              onClick={() => setActive(link.id)}
              className={`cursor-pointer hover:text-blue-600 transition ${
                active === link.id ? "text-blue-600" : ""
              }`}
            >
              {link.label}
            </Link>
            <div
              className={`w-2 h-2 rounded-full transition absolute top-[100%] ${
                active === link.id ? "bg-blue-600" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </nav>
  );
}
