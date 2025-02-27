"use client";

import BenefitsTable from "./components/BenefitsTable";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ReferralSteps from "./components/ReferralSteps";
import ScrollNav from "./components/ScrollNav";
import TopBanner from "./components/TopBanner";
import { ReferralContextProvider } from "./utils/ReferralContextProvider";

export default function Home() {
  return (
    <ReferralContextProvider>
      <TopBanner />
      <Navbar />
      <ScrollNav />
      <HeroSection />
      <ReferralSteps />
      <BenefitsTable />
      <FAQSection />
      <Footer />
    </ReferralContextProvider>
  );
}
