import React from 'react';

const HeroLanding = () => {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 flex items-center justify-center w-full">
                <div className="text-center text-white p-4 md:p-8 w-full md:w-2/3">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">KNIT KART</h1>
                    <h3 className='text-lg md:text-xl lg:text-2xl text-secondary'>KNIT's Arcade for Recycled Treasure</h3>
                    <p className="mt-3 md:mt-5 mb-3 md:text-lg text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente sequi quibusdam. Amet itaque, fugiat, quidem, non architecto consequuntur recusandae ipsam laborum porro doloremque tempore earum ducimus quas nemo.</p>
                    <button className="py-2 md:py-3 px-2 md:px-4 bg-accent dark:bg-accent border-2 border-transparent rounded w-[40%] md:w-[30%] dark:text-[#f4f4f4] hover:border-black hover:dark:border-white duration-300 transition-all">
                        Get Started
                    </button>
                    <div className='mt-6 md:mt-12'>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">How It Works</h2>
                        <div className='flex flex-col md:flex-row items-center md:justify-between bg-gradient-to-r from-purple-400 to-pink-500 rounded-md p-4 space-y-4 md:space-y-0'>
                            <div className="cursor-pointer">
                                <h5 className='text-white font-bold text-base md:text-lg transition-all duration-300 hover:text-yellow-300'>Create Account</h5>
                                <p className="text-sm md:text-base text-gray-200">Sign up and create your profile to get started.</p>
                            </div>
                            <div className="cursor-pointer">
                                <h5 className='text-white font-bold text-base md:text-lg transition-all duration-300 hover:text-yellow-300'>Post Ad</h5>
                                <p className="text-sm md:text-base text-gray-200">Upload details of the item you want to exchange.</p>
                            </div>
                            <div className="cursor-pointer">
                                <h5 className='text-white font-bold text-base md:text-lg transition-all duration-300 hover:text-yellow-300'>Find Your Exchange</h5>
                                <p className="text-sm md:text-base text-gray-200">Browse listings and find the perfect match for exchange.</p>
                            </div>
                            <div className="cursor-pointer">
                                <h5 className='text-white font-bold text-base md:text-lg transition-all duration-300 hover:text-yellow-300'>Get Your Item</h5>
                                <p className="text-sm md:text-base text-gray-200">Coordinate with the other party and complete the exchange.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroLanding;
