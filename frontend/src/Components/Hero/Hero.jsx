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
        <div className="flex-1 flex flex-col justify-center md:items-start items-center px-5 mb-1" data-aos="fade-right">
          <TypewriterEffectDemo />
          <p className="mt-5 mb-3 md:text-xl md:text-start text-center">
          Empowering Hostellers. Swap, sell, or shop. Join a sustainable hostel community. Reduce waste, share treasures. Your one-stop for eco-friendly living. Discover, exchange, thrive.
          </p>
          <button onClick={temporary} className="py-3 px-2 bg-accent dark:bg-accent border-2 border-transparent rounded w-[30%] dark:text-[#f4f4f4] hover:border-black hover:dark:border-white">
            Get Started
          </button>
        </div>
        <div className="flex-1 justify-center px-3">
          <img src={heroImage} alt="Hero" className="h-full object-cover" data-aos="fade-left"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
