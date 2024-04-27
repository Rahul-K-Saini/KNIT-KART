import React, { useState } from "react";
import userImg from "../../assets/images/user.jpeg";
import AdCard from "@/Components/AdCard/AdCard";
import { FaRegEdit } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineManageAccounts, MdDashboard } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { FaGear } from 'react-icons/fa6';
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/index";


const Profile = () => {

    const dispatch = useDispatch();

    const [isEditable, setIsEditable] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [activeSection, setActiveSection] = useState('profile');

    let user = useSelector(state => state.user.user);

    if (!user) {
        user = {
            name: '',
            gender: '',
            email: '',
            contact: '',
            hostel: '',
            roomNo: ''
        }
    }

    const [formData, setFormData] = useState({
        name: user.name,
        gender: user.gender,
        email: user.email,
        contact: user.contact,
        hostel: user.hostel,
        roomNo: user.roomNo
    });

    const handleEditable = () => {
        setIsEditable((prev) => !prev);
        setDisabled(!disabled)
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const clearInput = () => {
        setFormData({
            name: '',
            gender: '',
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

    const handleSave = () => {
        console.log("Updated Profile Data: is", formData);
    };

    const DUMMY_DATA = [
        {
            id: 1,
            productName: "MSD ka Cricket Bat",
            category: "Sports",
            description: "DSC Wooden Bat with white grip. easy to hit Six with my bat",
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/A_Modern_Cricket_Bat.jpg'
        },
        {
            id: 2,
            productName: "JBL Headphone",
            category: "Wearable",
            description: "Amazing Sound Quality, Brand New Product with bluetooth support",
            imageURL: 'https://rukminim1.flixcart.com/blobio/1160/1160/imr-201907/blobio-imr-201907_cf6670eb0079426fab6ef9c538290065.jpg'

        },
        {
            id: 3,
            productName: "JBL Headphone",
            category: "Wearable",
            description: "Amazing Sound Quality, Brand New Product with bluetooth support",
            imageURL: 'https://rukminim1.flixcart.com/blobio/1160/1160/imr-201907/blobio-imr-201907_cf6670eb0079426fab6ef9c538290065.jpg'

        },
        {
            id: 4,
            productName: "JBL Headphone",
            category: "Wearable",
            description: "Amazing Sound Quality, Brand New Product with bluetooth support",
            imageURL: 'https://rukminim1.flixcart.com/blobio/1160/1160/imr-201907/blobio-imr-201907_cf6670eb0079426fab6ef9c538290065.jpg'

        },
        {
            id: 5,
            productName: "Mechanical Keyboard",
            category: "Gaming",
            description: "A very nice and fully working Gaming keyboard. Must have for pro gamers.",
            imageURL: 'https://hips.hearstapps.com/hmg-prod/images/pop-mechanical-keyboards-64e4ce5645fe9.jpg'
        }
    ]

    return (
        <div className='w-screen h-fit flex bg-background text-text'>
            {/* left side bar start */}
            <div className='flex flex-col md:w-1/5 w-2/12 py-7 pl-5 border-r'>
                <div className='flex items-center space-x-4'>
                    <FaGear />
                    <button className='font-bold text-2xl text-start md:block hidden'>Settings</button>
                </div>
                <div className='flex flex-col ml-2 space-y-3 mt-11'>
                    <div onClick={() => handleSectionChange('profile')} className='flex items-center space-x-3 hover:text-primary'>
                        <MdModeEditOutline className='md:text-lg text-2xl' />
                        <button className='text-lg transition-colors duration-300 md:block hidden'>Edit Profile</button>
                    </div>
                    <div onClick={() => handleSectionChange('password')} className='flex items-center space-x-3 hover:text-primary'>
                        <MdOutlineManageAccounts className='md:text-lg text-2xl' />
                        <button className='text-lg transition-colors duration-300 md:block hidden'>Manage Password</button>
                    </div>
                    <div onClick={() => handleSectionChange('dashboard')} className='flex items-center space-x-3 hover:text-primary'>
                        <MdDashboard className='md:text-lg text-2xl' />
                        <button className='text-lg transition-colors duration-300 md:block hidden'>Dashboard</button>
                    </div>
                </div>
            </div>
            {/* left side bar end */}

            {/* right side section start */}
            <div className='w-full py-10 space-y-7'>

                {/* Heading and pofile picture start */}
                <div className='flex items-center justify-between md:w-9/12 w-10/12 mx-auto'>
                    <h1>
                        {activeSection === 'profile' ? (
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
                        ) : activeSection === 'password' ? (
                            <><h1 className='md:text-3xl text-2xl'>Password</h1></>
                        ) : (
                            <><h1 className='md:text-3xl text-2xl'>Dashboard</h1></>
                        )}
                    </h1>
                    <img src={userImg} alt="img" className='md:h-32 h-16 md:w-32 w-16 rounded-full' />
                </div>
                {/* Heading and pofile picture end */}

                {/* profile section start */}
                {activeSection === 'profile' ? (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-9/12 w-10/12 mx-auto">
                        {Object.entries(formData).map(([key, value]) => (
                            <div key={key}>
                                <label htmlFor={key} className="block mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                <input type="text" id={key} name={key} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} className="border p-2 w-full focus:outline-none text-black" value={value} onChange={handleInputChange} disabled={disabled} />
                            </div>
                        ))}
                    </div>
                ) : activeSection === 'password' ? (
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
                ) : (
                    <div>
                        <div className='grid md:grid-cols-3 grid-cols-1 bg-background'>
                            {DUMMY_DATA.map((ad) => <AdCard key={ad.id} ad={ad} />)}
                        </div>
                    </div>
                )}

                {/* Save and cancel btn */}
                <div className='flex items-start space-x-8 md:w-9/12 w-10/12 mx-auto'>
                    <button className='border-2 border-accent text-accent text-lg py-1 px-6 transform transition-all duration-300 hover:scale-105'>Cancel</button>
                    <button className='border-2 border-accent bg-accent text-white text-lg py-1 px-6 transform transition-all duration-300 hover:scale-105' onClick={handleSave}>Save</button>
                </div>
                {/* Save and cancel btn */}
            </div>
            {/* right side section end */}

        </div>
    );
};

export default Profile;
