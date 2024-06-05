import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdModeEditOutline, MdDashboard } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { FaGear } from 'react-icons/fa6';
import { useUserContext } from "@/context/userContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ProfileSection from "../../Components/ProfileSection/ProfileSection";
import PasswordSection from "../../Components/PasswordSection/PasswordSection";
import DashboardSection from "../../Components/Dashboard/Dashboard";

const Profile = () => {
    const [userAds, setUserAds] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [activeSection, setActiveSection] = useState('profile');

    const { user } = useUserContext();

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        email: '',
        contact: '',
        hostel: '',
        roomNo: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.user.name || '',
                gender: user.user.gender || '',
                email: user.user.email || '',
                contact: user.user.contact || '',
                hostel: user.user.hostel || '',
                roomNo: user.user.roomNo || ''
            });
            getUserAds();
        }
    }, [user]);

    const handleEditable = () => {
        setIsEditable((prev) => !prev);
        setDisabled(!disabled);
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    // const clearInput = () => {
    //     setFormData({
    //         name: '',
    //         gender: '',
    //         email: '',
    //         contact: '',
    //         hostel: '',
    //         roomNo: ''
    //     });
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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

    const getUserAds = async () => {
        const payload = {
            id: user.user._id
        };
        try {
            const res = await axios.post("http://localhost:8000/ad/getUserAds", payload);
            console.log(res);
            setUserAds(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Toaster />
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
                        <div onClick={() => handleSectionChange('dashboard')} className='flex items-center space-x-3 hover:text-primary'>
                            <MdDashboard className='md:text-lg text-2xl' />
                            <button className='text-lg transition-colors duration-300 md:block hidden'>Dashboard</button>
                        </div>
                    </div>
                </div>
                {/* left side bar end */}

                {/* right side section start */}
                <div className='w-full py-10 space-y-7'>

                    {/* Heading and profile picture start */}
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
                                        {/* <span className='md:text-xl text-base flex items-center font-light cursor-pointer' onClick={clearInput}>
                                            Clear All
                                            <TbReload className='ml-1' />
                                        </span> */}
                                    </div>
                                </div>
                            ) : activeSection === 'password' ? (
                                <><h1 className='md:text-3xl text-2xl'>Password</h1></>
                            ) : (
                                <><h1 className='md:text-3xl text-2xl'>Dashboard</h1></>
                            )}
                        </h1>
                        <img src={user.user.profile_pic} alt="img" className='md:h-32 h-16 md:w-32 w-16 rounded-full' />
                    </div>
                    {/* Heading and profile picture end */}

                    {/* Render respective section based on activeSection */}
                    {activeSection === 'profile' && (
                        <ProfileSection
                            user={user}
                            isEditable={isEditable}
                            handleInputChange={handleInputChange}
                            formData={formData}
                            handleSubmit={handleSubmit} // Pass the handleSubmit function
                        />
                    )}

                    {activeSection === 'password' && <PasswordSection />}
                    {activeSection === 'dashboard' && (
                        <DashboardSection userAds={userAds} deleteAd={deleteAd} />
                    )}

                </div>
                {/* right side section end */}
            </div>
        </>
    );
};

export default Profile;
