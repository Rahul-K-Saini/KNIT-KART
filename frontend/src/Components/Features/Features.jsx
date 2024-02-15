import React from 'react';
import { FeatureCard } from './FeatureCard';
import features from './allfeatures';

const Features = () => {

    return (
        <div className='md:p-20 px-4 py-14 flex flex-col justify-center items-center' style={{ backgroundColor: "#F4F4F4", color: "#333333" }}>
            <h1 className='text-3xl font-medium mb-6'>Why Us</h1>
            <p className="mb-8">Unveiling Our Specialties</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8" style={{ color: "#FAF9F6" }}>
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default Features;
