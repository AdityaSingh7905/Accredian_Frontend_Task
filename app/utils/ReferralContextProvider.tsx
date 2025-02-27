"use client";
import React, { ReactNode, useState } from "react";

export const ReferralContext = React.createContext({
  isModalOpen: false,
  setIsModalOpen: (modal: boolean) => {},
  openModal: () => {},
  closeModal: () => {},
});

type ReferralProviderProps = {
  children: ReactNode;
};

export const ReferralContextProvider: React.FC<ReferralProviderProps> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ReferralContext.Provider
      value={{ isModalOpen, setIsModalOpen, openModal, closeModal }}
    >
      {children}
    </ReferralContext.Provider>
  );
};
