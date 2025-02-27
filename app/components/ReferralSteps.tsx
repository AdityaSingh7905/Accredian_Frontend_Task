"use client";
import * as React from "react";
import ModalOverlay from "../ui/ModalOverlay";
import Form from "../ui/Form";
import { ReferralContext } from "../utils/ReferralContextProvider";
import { useContext } from "react";

function ReferralSteps() {
  const { isModalOpen, setIsModalOpen } = useContext(ReferralContext);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
  };
  return (
    <>
      <section
        id="refer"
        className="flex flex-col justify-center items-center px-20 py-9 mt-12 w-full text-center bg-blue-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        <div className="flex flex-col items-center w-full max-w-[1387px] max-md:max-w-full">
          <h2 className="text-3xl font-semibold leading-loose text-gray-900">
            How Do I <span className="text-[rgba(26,115,232,1)]">Refer?</span>
          </h2>
          <img
            src="/Refer_Horizontal.svg"
            className="object-contain self-stretch mt-8 w-full aspect-[2.82] max-md:mt-10 max-md:max-w-full"
            alt="Referral process steps"
          />
          <button
            className="px-12 py-4 mt-10 max-w-full text-xl leading-tight text-white bg-blue-600 rounded-lg w-[236px] max-md:px-5 max-md:mt-10"
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

export default ReferralSteps;
