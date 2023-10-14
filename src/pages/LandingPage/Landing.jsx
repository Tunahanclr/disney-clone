import React from "react";
import Hero from "../../components/Landing/Hero";
import Navbar from "../../components/Landing/Navbar";
import OnlyOnDisney from "../../components/Landing/OnlyOnDisney";
import CustomViewing from "../../components/Landing/CustomViewing";
import PlatformFeatures from "../../components/Landing/PlatformFeatures";
import FrequentlyAskedQuestions from "../../components/Landing/FrequentlyAskedQuestions";
import FavoriteDevices from "../../components/Landing/FavoriteDevices";
import Footer from "../../components/Landing/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlyOnDisney />
      <CustomViewing />
      <PlatformFeatures />
      <FrequentlyAskedQuestions />
      <FavoriteDevices />
      <Footer />
    </>
  );
}
