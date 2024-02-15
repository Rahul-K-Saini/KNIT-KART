import React, { useEffect, useState } from "react";
import "./hero.modules.css";
import { ArrowRight  } from 'lucide-react';

function Hero() {
  const [animate, setAnimate] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-start w-[90%] m-auto py-11">
      <h1 className={`titleFont text-5xl ${animate ? "fade-in" : ""}`}>
        KNIT's Arcade for Recycled Treasures
      </h1>
      <div className="w-[70%]">
        <p className="text-lg text-gray-600 mb-5">
          At KNIT KART, we're transforming how college hostel students buy,
          sell, and exchange used items. Say hello to a clutter-free dorm room
          and a vibrant marketplace just for you. Join us today and discover
          endless possibilities at your fingertips.
        </p>
      </div>
      <button
       onMouseEnter={() => setHovered(true)}
       onMouseLeave={() => setHovered(false)}
       className="py-3 px-5 bg-black rounded text-white boxShadow heroButton">
        Browse<ArrowRight className={`arrowIcon inline ${hovered ? "translateX" : ""}`} />
      </button>
    </div>
  );
}

export default Hero;
