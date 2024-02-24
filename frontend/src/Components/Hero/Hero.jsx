import React from "react";
import heroImage from "../../assets/images/hero.jpeg";
import { TypewriterEffectDemo } from "../TypeWriterDemo/TypeWriterDemo";

function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f7f1fe] to-background dark:text-gray-50 dark:bg-gradient-to-b dark:from-footer dark:to-background">
      <div className="flex justify-between items-stretch max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col justify-center px-5">
          <TypewriterEffectDemo />
          <p className="mt-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            sapiente sequi quibusdam. Amet itaque, fugiat, quidem, non ex
            architecto consequuntur recusandae ipsam laborum porro doloremque
            tempore earum ducimus quas nemo.
          </p>
          <button className="py-3 px-2 bg-accent dark:bg-accent border-2 border-transparent rounded w-[30%] hover:border-black hover:dark:border-white">
            Get Started
          </button>
        </div>
        <div className="flex-1 flex justify-center border-l-8 border-secondary">
          <img src={heroImage} alt="Hero" className="h-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
