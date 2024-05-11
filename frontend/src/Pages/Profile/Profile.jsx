import React, { useEffect, useState } from "react";
import userImg from "../../assets/images/user.jpeg";
import AdCard from "@/Components/AdCard/AdCard";
import { FaRegEdit } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineManageAccounts, MdDashboard } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { FaGear } from 'react-icons/fa6';
import { useUserContext } from "@/context/userContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
    const [userDetails,setUserDetails] = useState(null);
    const [userAds, setUserAds] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [activeSection, setActiveSection] = useState('profile');

    let {user} = useUserContext();

    useEffect(() => {
        if (user) {
            setUserDetails(user.user);
            getUserAds();
        }
    }, [user]);


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
    };

    const deleteAd = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8000/ad/deleteAd/${id}`);
            toast.success("Ad Deleted Successfully");
            console.log(res);
            getUserAds();
        } catch (e) {
            console.log(e);
        }
    };


    const getUserAds = async()=>{
        const payload = {
            id:user.user._id
        }
        try{
            const res  = await axios.post("http://localhost:8000/ad/getUserAds",payload);
            console.log(res);
            setUserAds(res.data);
        }catch(e){
            console.log(e);
        }
    }

    return (
        <>
        <Toaster/>
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
                        {userDetails!=null ? Object.entries(userDetails).map(([key, value]) => (
                            <div key={key}>
                                <label htmlFor={key} className="block mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                <input type="text" id={key} name={key} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} className="border p-2 w-full focus:outline-none text-black" value={value} onChange={handleInputChange} disabled={disabled} />
                            </div>
                        )):"Loading..."}
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
                            {userAds.map((ad) => <AdCard key={ad.id} ad={ad} deleteAd={deleteAd} />)}
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
        </>
    );
};

export default Profile;
