import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Hero() {
  return (
    <section className="w-full bg-background text-text h-fit py-8">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2500}
        transitionTime={500}
        className="text-center"
      >
        <div className="bg-blue-900 p-6 py-16 rounded-lg cursor-pointer">
          <h5 className='text-white font-bold text-lg md:text-2xl transition-all duration-300 hover:text-yellow-300'>Create Account</h5>
          <p className="text-sm md:text-base text-gray-200">Sign up and create your profile to get started.</p>
        </div>
        <div className="bg-green-900 p-6 py-16 rounded-lg cursor-pointer">
          <h5 className='text-white font-bold text-lg md:text-2xl transition-all duration-300 hover:text-yellow-300'>Post Ad</h5>
          <p className="text-sm md:text-base text-gray-200">Upload details of the item you want to exchange.</p>
        </div>
        <div className="bg-purple-900 p-6 py-16 rounded-lg cursor-pointer">
          <h5 className='text-white font-bold text-lg md:text-2xl transition-all duration-300 hover:text-yellow-300'>Find Your Exchange</h5>
          <p className="text-sm md:text-base text-gray-200">Browse listings and find the perfect match for exchange.</p>
        </div>
        <div className="bg-red-900 p-6 py-16 rounded-lg cursor-pointer">
          <h5 className='text-white font-bold text-lg md:text-2xl transition-all duration-300 hover:text-yellow-300'>Get Your Item</h5>
          <p className="text-sm md:text-base text-gray-200">Coordinate with the other party and complete the exchange.</p>
        </div>
      </Carousel>
    </section>
  );
}

export default Hero;
