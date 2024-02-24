import React from "react";
import Features from "../../Components/Features/Features";
import FAQs from "../../Components/FAQs/FAQs";
import Hero from "@/Components/Hero/Hero";

const LandingPage = () => {
  return (
    <>
      <div className="m-0 p-0 box-border">
        <Hero />
        <Features />
        <FAQs />
      </div>
    </>
  );
};

export default LandingPage;
