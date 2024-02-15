import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
function LandingPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#fcd966] via-[#FFF7D4] to-white">
        <Hero />
      </section>
      <section className="w-full border-t-4 border-black">
        <Features />
      </section>
    </main>
  );
}

export default LandingPage;
