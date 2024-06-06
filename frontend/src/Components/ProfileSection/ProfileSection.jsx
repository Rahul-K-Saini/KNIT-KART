import React from "react";

const ProfileSection = ({ user, isEditable, handleInputChange, formData, handleSubmit }) => {

    if (!user) return <div>Loading..</div>

    const selectedKeys = ['name', 'email', 'hostel', 'year', 'gender'];
    const genders = ["Male", "Female"];
    const years = [1, 2, 3, 4];
    const hostels = ["Aryabhatta", "Vikram Sarabhai", "Bhabha", "Ramanujan", "Old VS", "New VS", "Hostel ABC", "Hostel LMT", "Raman", "Gargi", "Maitreyi", "MNS"].sort();

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-9/12 w-10/12 mx-auto">
                {selectedKeys.map((key) => (
                    <div key={key}>
                        <label htmlFor={key} className="block mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        {key === 'gender' ? (
                            <select
                                id={key}
                                name={key}
                                className="border p-2 w-full focus:outline-none text-black"
                                value={formData[key] || ''}
                                onChange={handleInputChange}
                                disabled={!isEditable}
                            >
                                <option value="">Select Gender</option>
                                {genders.map((gender) => (
                                    <option key={gender} value={gender}>{gender}</option>
                                ))}
                            </select>
                        ) : key === 'hostel' ? (
                            <select
                                id={key}
                                name={key}
                                className="border p-2 w-full focus:outline-none text-black"
                                value={formData[key] || ''}
                                onChange={handleInputChange}
                                disabled={!isEditable}
                            >
                                <option value="">Select Hostel</option>
                                {hostels.map((hostel) => (
                                    <option key={hostel} value={hostel}>{hostel}</option>
                                ))}
                            </select>
                        ) : key === 'year' ? (
                            <select
                                id={key}
                                name={key}
                                className="border p-2 w-full focus:outline-none text-black"
                                value={formData[key] || ''}
                                onChange={handleInputChange}
                                disabled={!isEditable}
                            >
                                <option value="">Select Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        ) : key === 'email' ? (
                            <input
                                type="text"
                                id={key}
                                name={key}
                                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                className="border p-2 w-full focus:outline-none text-black"
                                value={formData[key] || ''}
                                disabled
                            />
                        ) : (
                            <input
                                type="text"
                                id={key}
                                name={key}
                                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                className="border p-2 w-full focus:outline-none text-black"
                                value={formData[key] || ''}
                                onChange={handleInputChange}
                                disabled={!isEditable}
                            />
                        )}
                    </div>
                ))}
            </div>
            {/* Save and cancel btn */}
            <div className='flex items-start space-x-8 md:w-9/12 w-10/12 mx-auto mt-4'>
                <button type="button" className='border-2 border-accent text-accent text-lg py-1 px-6 transform transition-all duration-300 hover:scale-105'>Cancel</button>
                <button type="submit" className='border-2 border-accent bg-accent text-white text-lg py-1 px-6 transform transition-all duration-300 hover:scale-105'>Save</button>
            </div>
            {/* Save and cancel btn */}
        </form>
    );
};

export default ProfileSection;
