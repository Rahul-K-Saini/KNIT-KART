import React from 'react';

const FeatureCard = ({ imageUrl, title, description }) => {
    return (
        <div className="flex flex-col justify-between items-center shadow-xl rounded" style={{ backgroundColor: "#faf9f6", color: "#333333" }}>
            <img src={imageUrl} alt="Feature Image" className="h-64 w-full bg-slate-500 rounded-t" />
            <div className='m-6'>
                <h2 className="text-xl font-medium mb-2">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Features = () => {
    const features = [
        {
            imageUrl: "your-image-url-1",
            title: "Easy Belonging Exchange",
            description: "Swap your belongings with others hassle-free",
        },
        {
            imageUrl: "your-image-url-2",
            title: "Animated Interface",
            description: "Engage with interactive animations while using the platform",
        },
        {
            imageUrl: "your-image-url-3",
            title: "Find the Stuff You Need",
            description: "Discover and acquire items you require from fellow hostelers",
        },
    ];

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
