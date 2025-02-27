"use client";
import React, { useContext, useEffect, useState } from "react";
import { ReferralContext } from "../utils/ReferralContextProvider";
import ModalOverlay from "../ui/ModalOverlay";
import Form from "../ui/Form";

export default function HeroSection() {
  const { isModalOpen, setIsModalOpen } = useContext(ReferralContext);
  const [heroWidth, setHeroWidth] = useState(1200);
  const [heroHeight, setHeroHeight] = useState(600);
  const [imageScale, setImageScale] = useState(1.3);
  const [rightPadding, setRightPadding] = useState("4rem");

  useEffect(() => {
    const updateSizes = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1280) {
        setHeroWidth(1200);
        setHeroHeight(600);
        setImageScale(1.5);
        setRightPadding("12rem");
      } else if (screenWidth >= 1024) {
        setHeroWidth(1000);
        setHeroHeight(500);
        setImageScale(1.6);
        setRightPadding("10rem");
      } else if (screenWidth >= 768) {
        setHeroWidth(760);
        setHeroHeight(450);
        setImageScale(1.5);
        setRightPadding("8rem");
      } else {
        setHeroWidth(screenWidth - 40);
        setHeroHeight(400);
        // setImageScale(1.6);
        // setRightPadding("20rem");
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        className="relative flex justify-center w-full mt-4"
        style={{ height: `${heroHeight}px` }}
      >
        <div
          className="flex flex-col md:flex-row items-center bg-blue-50 shadow-2xl rounded-[29px] relative overflow-hidden"
          style={{ width: `${heroWidth}px`, height: "100%" }}
        >
          <img
            src="/Accredian_Image_Money.png"
            className="absolute top-0 left-0 scale-y-[-1] rotate-[-10deg] -translate-y-4"
            style={{
              width: "157px",
              height: "87px",
              maxWidth: "100%",
            }}
          />
          <div className="hidden md:flex relative flex flex-col justify-center items-start text-left px-10 md:w-[40%] h-full z-10">
            <h1
              className="font-bold text-gray-900 leading-tight mb-6 
                text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Let’s Learn <br /> & Earn
            </h1>

            <p
              className="text-gray-900 leading-snug mb-2 
                text-lg md:text-xl lg:text-2xl"
            >
              Get a chance to win
            </p>

            <p
              className="text-gray-900 leading-snug 
                text-lg md:text-xl lg:text-2xl"
            >
              up to{" "}
              <span
                className="text-blue-600 font-bold 
                         text-3xl md:text-2xl lg:text-4xl xl:text-5xl"
              >
                Rs. 15,000
              </span>
            </p>

            <button
              className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                     text-lg md:text-xl hover:bg-blue-700 transition"
              onClick={onClickHandler}
            >
              Refer Now
            </button>
          </div>
          <div
            className="hidden md:flex relative md:w-[60%] flex justify-center items-center"
            style={{
              height: "100%",
              position: "relative",
              right: "-10%",
              marginRight: rightPadding, // Dynamic padding
            }}
          >
            <img
              src="/Accredian_Hero_Section.png"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: `scale(${imageScale})` }}
              alt="Hero Section"
            />
          </div>
          {/* // hero section for smaller screens */}
          <div className="md:hidden flex flex-col items-center justify-center text-center bg-blue-50 p-6 rounded-lg mt-8">
            <h1 className="font-bold text-gray-900 text-6xl">
              Let’s Learn & Earn
            </h1>

            <p className="text-gray-700 text-3xl mt-6">
              Get a chance to win up-to <br />
              <span className="text-blue-600 font-bold text-5xl">
                Rs. 15,000
              </span>
            </p>

            <button
              className="mt-8 px-8 py-5 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                     text-4xl hover:bg-blue-700 transition"
              onClick={onClickHandler}
            >
              Refer Now
            </button>
          </div>
        </div>
      </section>
      {/* Modal */}
      <ModalOverlay isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form />
      </ModalOverlay>
    </>
  );
}
