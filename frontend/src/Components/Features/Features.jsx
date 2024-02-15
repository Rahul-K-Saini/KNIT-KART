import React from 'react';
import { FeatureCard } from './FeatureCard';
import features from './allfeatures';

const Features = () => {

    return (
        <div className='md:p-20 px-4 py-12 border-b flex flex-col text-gray-700 bg-gray-100 dark:bg-[#121212] dark:text-gray-50 justify-center items-center'>
            <h2 className='text-3xl font-medium mb-6'>Why Us</h2>
            <p className="mb-8">Unveiling Our Specialties</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 ">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default Features;
