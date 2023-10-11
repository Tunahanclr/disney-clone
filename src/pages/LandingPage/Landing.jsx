import React from "react";
import Hero from "../../components/Landing/Hero";
import Navbar from "../../components/Landing/Navbar";
import OnlyOnDisney from "../../components/Landing/OnlyOnDisney";
import CustomViewing from "../../components/Landing/CustomViewing";
import PlatformFeatures from "../../components/Landing/PlatformFeatures";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlyOnDisney />
      <CustomViewing />
      <PlatformFeatures />
    </>
  );
}
