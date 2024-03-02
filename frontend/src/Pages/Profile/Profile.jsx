import React, { useState } from "react";
import user from "../../assets/images/user.jpeg";
import { FaRegEdit } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineManageAccounts } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { FaGear } from 'react-icons/fa6';

const Profile = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(true);
    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        hostelName: '',
        roomNo: ''
    });

  const handleEditable = () => {
    setIsEditable((prev) => !prev);
  };

  const handleEditProfileClick = () => {
    setIsEditingProfile(true);
  };

    const handleChangePasswordClick = () => {
        setIsEditingProfile(false);
    };

    const clearInput = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            hostelName: '',
            roomNo: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='w-screen h-fit flex bg-background text-text'>
            <div className='flex flex-col md:w-1/5 w-2/12 py-7 pl-5 border-r'>
                <div className='flex items-center space-x-4'>
                    <FaGear />
                    <button className='font-bold text-2xl text-start md:block hidden'>Settings</button>
                </div>
                <div className='flex flex-col ml-2 space-y-3 mt-11'>
                    <div onClick={handleEditProfileClick} className='flex items-center space-x-3 hover:text-primary'>
                        <MdModeEditOutline className='md:text-lg text-2xl' />
                        <button className='text-lg transition-colors duration-300 md:block hidden'>Edit Profile</button>
                    </div>
                    <div onClick={handleChangePasswordClick} className='flex items-center space-x-3 hover:text-primary'>
                        <MdOutlineManageAccounts className='md:text-lg text-2xl' />
                        <button className='text-lg transition-colors duration-300 md:block hidden'>Manage Password</button>
                    </div>
                </div>
            </div>
            <div className='w-full py-10 space-y-7'>
                <div className='flex items-center justify-between md:w-9/12 w-10/12 mx-auto'>
                    <h1>
                        {isEditingProfile ? (
                            <div className='flex items-start flex-col'>
                                <span className='md:text-3xl text-2xl'>Profile</span>
                                <div className='flex md:space-x-12 md:flex-row flex-col space-y-2'>
                                    <span className='md:text-xl text-base flex items-center font-light cursor-pointer' onClick={handleEditable}>
                                        Enable Editing
                                        <FaRegEdit className={`${isEditable ? 'text-secondary' : 'text-text'} md:ml-1 cursor-pointer`} />
                                    </span>
                                    <span className='md:text-xl text-base flex items-center font-light cursor-pointer' onClick={clearInput}>
                                        Clear All
                                        <TbReload className='ml-1' />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <>Password</>
                        )}
                    </h1>
                    <img src={user} alt="img" className='md:h-32 h-16 md:w-32 w-16 rounded-full' />
                </div>

                {isEditingProfile ? (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-9/12 w-10/12 mx-auto">
                        {Object.entries(formData).map(([key, value]) => (
                            <div key={key}>
                                <label htmlFor={key} className="block mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                <input type="text" id={key} name={key} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} className="border p-2 w-full focus:outline-none text-black" readOnly={!isEditable} value={value} onChange={handleInputChange} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 md:w-9/12 w-10/12 mx-auto">
                        <div>
                            <label htmlFor="currentPassword" className="block mb-1">Current Password</label>
                            <input type="password" id="currentPassword" name="currentPassword" placeholder="Current Password" className="border p-2 md:w-1/3 w-5/6 focus:outline-none" />
                            <a href="https://www.google.com" className='underline text-primary ml-8 text-lg'>Forget Password?</a>
                        </div>
                        <div>
                            <label htmlFor="newPassword" className="block mb-1">New Password</label>
                            <input type="password" id="newPassword" name="newPassword" placeholder="New Password" className="border p-2 md:w-1/3 w-5/6 focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="border p-2 md:w-1/3 w-5/6 focus:outline-none" />
                        </div>
                    </div>
                )}

                <div className='flex items-start space-x-8 md:w-9/12 w-10/12 mx-auto'>
                    <button className='border-2 border-accent text-accent text-lg py-1 px-6'>Cancel</button>
                    <button className='border-2 border-accent bg-accent text-white text-lg py-1 px-6'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
