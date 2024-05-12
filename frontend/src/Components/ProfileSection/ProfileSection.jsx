import React from "react";

const ProfileSection = ({ user, isEditable, disabled, handleEditable, clearInput, handleInputChange }) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-9/12 w-10/12 mx-auto">
            {Object.entries(user).map(([key, value]) => (
                <div key={key}>
                    <label htmlFor={key} className="block mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    <input type="text" id={key} name={key} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} className="border p-2 w-full focus:outline-none text-black" value={value} onChange={handleInputChange} disabled={disabled} />
                </div>
            ))}
        </div>
    );
};

export default ProfileSection;
