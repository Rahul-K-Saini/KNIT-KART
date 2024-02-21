import React from "react";
import heroImg from '../../assets/images/imHero.png';

function Hero() {
  return (
    <section className="flex overflow-hidden bg-gradient-to-b from-teal-100  to-teal-900 dark:from-teal-900 dark:to-[#121212] px-5">
      <div className="max-w-2xl">
        <h1 className="text-4xl text-gray-800 dark:text-white mb-5 pt-36">
          KNIT's Arcade For Recycled Treasures
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-50 mb-5">
          At KNIT KART, we're transforming how college hostel students buy, sell,
          and exchange used items. Say hello to a clutter-free dorm room and a
          vibrant marketplace just for you. Join us today and discover endless
          possibilities at your fingertips.
        </p>
        <button className="px-5 py-4 bg-black text-white rounded hover:bg-gray-900">
          Browse Ads
        </button>
      </div>
      <div className='w-fit h-fit px-5 animate-spin' style={{ animationDuration: '60s' }}>
        <img src={heroImg} alt="hero" className=""/>
      </div>
    </section>
  );
}

export default Hero;
