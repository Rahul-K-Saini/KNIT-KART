import React, { useEffect } from "react";
import heroImage from "../../assets/images/hero.jpeg";
import { TypewriterEffectDemo } from "../TypeWriterDemo/TypeWriterDemo";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const temporary = ()=>{
    navigate("/profile");
  }

  return (
    <section className="w-full bg-background text-text h-fit">
      <div className="flex md:flex-row flex-col justify-between py-8">
        <div className="flex-1 flex flex-col justify-center md:items-start items-center px-5" data-aos="fade-right">
          <TypewriterEffectDemo />
          <p className="mt-5 mb-3 md:text-xl md:text-start text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            sapiente sequi quibusdam. Amet itaque, fugiat, quidem, non
            architecto consequuntur recusandae ipsam laborum porro doloremque
            tempore earum ducimus quas nemo.
          </p>
<<<<<<< HEAD
          <button className="py-3 px-2 mb-4 bg-accent dark:bg-accent border-2 border-transparent rounded w-[30%] dark:text-[#f4f4f4] hover:border-black hover:dark:border-white transform transition-all duration-300 hover:scale-105">
=======
          <button onClick={temporary} className="py-3 px-2 bg-accent dark:bg-accent border-2 border-transparent rounded w-[30%] dark:text-[#f4f4f4] hover:border-black hover:dark:border-white">
>>>>>>> 529afaa2bf818c9cff1e1cbc92cf33ca6a9911c3
            Get Started
          </button>
        </div>
        <div className="flex-1 justify-center px-3">
          <img src={heroImage} alt="Hero" className="h-full" data-aos="fade-left"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
