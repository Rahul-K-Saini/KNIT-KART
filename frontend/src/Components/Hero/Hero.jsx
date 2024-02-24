import React from "react";
import heroImage from "../../assets/images/hero.jpeg";
import { TypewriterEffectDemo } from "../TypeWriterDemo/TypeWriterDemo";

function Hero() {
  return (
    <section className="w-full bg-gray-50 dark:text-gray-50 dark:bg-background dark:bg-opacity-50">
      <div className=" flex justify-between items-center flex-1">
        <div className="px-5">
          <TypewriterEffectDemo />
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            sapiente sequi quibusdam. Amet itaque, fugiat, quidem, non ex
            architecto consequuntur recusandae ipsam laborum porro doloremque
            tempore earum ducimus quas nemo.
          </p>
        </div>
        <div>
          <img src={heroImage} alt="" srcset="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
