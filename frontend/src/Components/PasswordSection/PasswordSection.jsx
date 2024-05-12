import React from "react";

const PasswordSection = () => {
    return (
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
    );
};

export default PasswordSection;
