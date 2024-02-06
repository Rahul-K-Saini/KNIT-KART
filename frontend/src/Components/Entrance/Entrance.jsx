import React, { useState } from 'react';
import styles from './Entrance.module.css';
import { Link } from 'react-router-dom';
const Entrance = () => {

    const [isLogin, setIsLogin] = useState({
        login: false,
        headingText: "Already Registered",
        buttonText: "Log In here"
    });

    const handleToggle = () => {
        if (isLogin.login) {
            setIsLogin({
                login: false,
                headingText: "Already Registered",
                buttonText: "Log In here"
            });
        } else {
            setIsLogin({
                login: true,
                headingText: "Not Registered yet",
                buttonText: "Signup here"
            });
        }
    };

    return (
        <div className='bg-cyan-200 w-full h-screen px-12 py-14'>
            <div className='bg-white rounded flex w-full h-full'>
                {/* Log In Section */}
                <div className='flex flex-col justify-center relative items-center space-y-3 bg-slate-300 w-1/2'>
                    <div className={`bg-pink-500 absolute top-0 w-full h-full z-10 ${!isLogin.login ? styles['login-slide'] : styles['signup-slide']}`}>
                        {/* Slider Window */}
                        <div className={styles['slider-window']}>
                            <h1>{isLogin.headingText}</h1>
                            <Link to={`?mode=${!isLogin ? 'signup' : 'login'}`} onClick={handleToggle}>{isLogin.buttonText}</Link>
                        </div>
                    </div>
                    <h1 className='text-4xl font-bold text-zinc-800'>Log In</h1>
                    <div className='flex flex-col justify-center items-start space-y-8 py-7'>
                        <input type="email" id="email" placeholder='Enter Your Registered Email' className='drop-shadow-xl text-xl p-2 rounded font-light' />
                        <input type="password" id="password" placeholder='Enter Your Password' className='drop-shadow-xl text-xl p-2 rounded font-light' />
                        <button className='bg-blue-600 text-white px-3 py-2 rounded-md text-xl drop-shadow-xl'>Log In</button>
                        <a href="" className='text-blue-600 underline'>Forget Password?</a>
                    </div>
                </div>

                {/* Sign Up Section */}
                <div className='bg-red-500 flex flex-col justify-center items-center space-y-3 w-1/2'>
                    <h1 className='text-4xl font-bold text-zinc-800'>Sign Up</h1>
                    <div className='flex flex-col justify-center items-start space-y-8 py-7'>
                        <input type="text" id="username" placeholder='Enter Your Username' className='drop-shadow-xl text-xl p-2 rounded font-light' />
                        <input type="email" id="email" placeholder='Enter Your Email' className='drop-shadow-xl text-xl p-2 rounded font-light' />
                        <input type="password" id="password" placeholder='Enter Your Password' className='drop-shadow-xl text-xl p-2 rounded font-light' />
                        <input type="password" id="confirmPassword" placeholder='Confirm Your Password' className='drop-shadow-xl text-xl p-2 rounded font-light' />
                        <button className='bg-blue-600 text-white px-3 py-2 rounded-md text-xl drop-shadow-xl'>Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Entrance;
