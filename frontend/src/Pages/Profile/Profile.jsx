import React, { useState } from "react";
import user from "../../assets/images/user.jpeg";
import { FaRegEdit } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";

const Profile = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(true);
  const [isEditable, setIsEditable] = useState(false);

  const handleEditable = () => {
    setIsEditable((prev) => !prev);
  };

  const handleEditProfileClick = () => {
    setIsEditingProfile(true);
  };

  const handleChangePasswordClick = () => {
    setIsEditingProfile(false);
  };

  return (
    <>
      <div className="w-screen h-fit flex bg-background text-text">
        <div className="flex flex-col w-1/5 py-7 pl-5 border-r">
          <div className="flex items-center space-x-4">
            <MdArrowBackIosNew />
            <button className="font-bold text-2xl text-start">Settings</button>
          </div>
          <div className="flex flex-col ml-2 space-y-3 mt-11">
            <div className="flex items-center space-x-3 hover:text-primary">
              <MdModeEditOutline className="text-lg" />
              <button
                onClick={handleEditProfileClick}
                className="text-lg transition-colors duration-300"
              >
                Edit Profile
              </button>
            </div>
            <div className="flex items-center space-x-3 hover:text-primary">
              <MdOutlineManageAccounts className="text-lg" />
              <button
                onClick={handleChangePasswordClick}
                className="text-lg transition-colors duration-300"
              >
                Manage Password
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-10 space-y-7">
          <div className="flex items-center justify-between w-9/12 mx-auto">
            <h1 className="text-3xl">
              {isEditingProfile ? (
                <div className="flex items-center">
                  Profile{" "}
                  <FaRegEdit
                    className={`text-xl ${
                      isEditable ? "text-secondary" : "text-text"
                    } ml-5 cursor-pointer`}
                    onClick={handleEditable}
                  />
                </div>
              ) : (
                <>Password</>
              )}
            </h1>
            <img src={user} alt="img" className="h-32 w-32 rounded-full" />
          </div>

          {isEditingProfile ? (
            <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto">
              <div>
                <label htmlFor="fname" className="block mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                  className="border p-2 w-full focus:outline-none text-black"
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <label htmlFor="lname" className="block mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Last Name"
                  className="border p-2 w-full focus:outline-none text-black"
                  readOnly={!isEditable}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border p-2 w-full focus:outline-none text-black"
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <label htmlFor="contact" className="block mb-1">
                  Contact No.
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Contact"
                  className="border p-2 w-full focus:outline-none text-black"
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">
                  Hostel Name
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Hostel Name"
                  className="border p-2 w-full focus:outline-none text-black"
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">
                  Room No.
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Room No."
                  className="border p-2 w-full focus:outline-none text-black"
                  readOnly={!isEditable}
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 w-9/12 mx-auto">
              <div>
                <label htmlFor="currentPassword" className="block mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Current Password"
                  className="border p-2 w-1/3 focus:outline-none"
                />
                <a
                  href="https://www.google.com"
                  className="underline text-primary ml-8 text-lg"
                >
                  Forget Password?
                </a>
              </div>
              <div>
                <label htmlFor="newPassword" className="block mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                  className="border p-2 w-1/3 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="border p-2 w-1/3 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div className="flex items-start space-x-8 w-9/12 mx-auto">
            <button className="border-2 border-accent text-accent text-lg py-1 px-6">
              Cancel
            </button>
            <button className="border-2 border-accent bg-accent text-white text-lg py-1 px-6">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
