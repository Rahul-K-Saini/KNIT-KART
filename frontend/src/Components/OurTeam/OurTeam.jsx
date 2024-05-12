import React from 'react';
import team from './Team';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const OurTeam = () => {
    return (
        <>
            <div className='flex items-center justify-center px-6 py-12 md:p-12  min-w-[300px]'>
                <div className="flex flex-col justify-center items-center container mx-auto py-8 px-4 w-full bg-background rounded-2xl">
                    <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
                    <div className="grid md:grid-cols-4 grid-col-1 gap-16 md:my-7 my-4">
                        {team.map((member, index) => (
                            <div key={index} className="flex flex-col items-center px-4 py-6 rounded-md bg-footer transition-all hover:-translate-y-3 duration-300 hover:shadow-xl">
                                <div className='flex flex-col items-center space-y-1'>
                                    <img src={member.imageUrl} className='h-24 w-auto transition-all hover:scale-105 duration-300 rounded-full' />
                                    <h5>{member.name}</h5>
                                    <p className='font-semibold'>{member.title}</p>
                                </div>
                                {/* social media links */}
                                <div className='flex items-center justify-around mt-8 py-4 w-full border-t border-black'>
                                    <a href={member.linkdeIn}><FaLinkedinIn className='hover:cursor-pointer hover:text-[#0a66c2] duration-300 text-xl' /></a>
                                    <a href={member.github}><FaGithub className='hover:cursor-pointer hover:text-[#3c3c3c] duration-300 text-xl' /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;
