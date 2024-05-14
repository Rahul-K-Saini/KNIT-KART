import React from "react";

const ProfileSection = ({ user }) => {

    if(!user) return <div>Loading..</div>

    const selectedKeys = ['name', 'email', 'hostel', 'year', 'gender'];


    return (
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-9/12 w-10/12 mx-auto">
                {selectedKeys.map((key) => (
                    <div key={key}>
                        <label htmlFor={key} className="block mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        <input type="text" id={key} name={key} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} className="border p-2 w-full focus:outline-none text-black" value={user[key]} disabled />
                    </div>
                ))}
            </div>
            {/* Save and cancel btn */}
            <div className='flex items-start space-x-8 md:w-9/12 w-10/12 mx-auto'>
                <button className='border-2 border-accent text-accent text-lg py-1 px-6 transform transition-all duration-300 hover:scale-105'>Cancel</button>
                <button className='border-2 border-accent bg-accent text-white text-lg py-1 px-6 transform transition-all duration-300 hover:scale-105'>Save</button>
            </div>
            {/* Save and cancel btn */}
        </>

    );
};

export default ProfileSection;
