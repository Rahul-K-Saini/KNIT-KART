import React, { useState } from 'react';
import style from './Entrance.module.css';
import { Link } from 'react-router-dom';

import Lottie from "react-lottie";
import loginLottie from '../../assets/lottieFiles/loginLottie'
import signupLottie from '../../assets/lottieFiles/signupLottie'
const Entrance = () => {

    const defaultOptionsLogin = {
        loop: false,
        autoplay: true,
        animationData: loginLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptionsSignup = {
        loop: true,
        autoplay: true,
        animationData: signupLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [isLogin, setIsLogin] = useState({
        login: false,
        headingText: "Already Registered",
        buttonText: "Log In here",
        compon: <Lottie
            options={defaultOptionsSignup}
            height={500}
            width={500}
        />
    });

    const handleToggle = () => {
        if (isLogin.login) {
            setIsLogin({
                login: false,
                headingText: "Already Registered",
                buttonText: "Log In here",
                compon: <Lottie
                    options={defaultOptionsSignup}
                    height={500}
                    width={500}
                />
            });
        } else {
            setIsLogin({
                login: true,
                headingText: "Not Registered yet",
                buttonText: "Signup here",
                compon: <Lottie
                    options={defaultOptionsLogin}
                    height={500}
                    width={500}
                />
            });
        }
    };

    

    return (
        <div className='bg-cyan-200 w-full h-screen px-12 py-14'>
            <div className='bg-white rounded flex w-full h-full'>
                {/* Log In Section */}
                <div className='flex flex-col justify-center relative items-center space-y-3 bg-slate-300 w-1/2'>
                    <div className={`bg-pink-500 absolute top-0 w-full h-full z-10 ${!isLogin.login ? style['login-slide'] : style['signup-slide']}`}>
                        {/* Slider Window */}
                        <div className={style['slider-window']}>
                            <div>
                                {isLogin.compon}
                            </div>
                            <h1>{isLogin.headingText}</h1>
                            <Link to={`?mode=${isLogin.login ? 'signup' : 'login'}`} onClick={handleToggle}>{isLogin.buttonText}</Link>
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
                <div className='bg-red-500 flex flex-col justify-center items-center space-y-3 w-1/2 rounded-3xl'>
                    <form className={style.form}>
                        <p className={style.title}>Register </p>
                        <p className={style.message}>Signup now and get full access to our app. </p>
                        <div className={style.flex}>
                            <label>
                                <input className={style.input} type="text" placeholder="" required="" />
                                <span>Firstname</span>
                            </label>

                            <label>
                                <input className={style.input} type="text" placeholder="" required="" />
                                <span>Lastname</span>
                            </label>
                        </div>

                        <label>
                            <input className={style.input} type="email" placeholder="" required="" />
                            <span>Email</span>
                        </label>

                        <label>
                            <input className={style.input} type="password" placeholder="" required="" />
                            <span>Password</span>
                        </label>
                        <label>
                            <input className={style.input} type="password" placeholder="" required="" />
                            <span>Confirm password</span>
                        </label>
                        <button className={style.submit}>Submit</button>
                        <p className={style.signin}>Already have an acount ? <a href="#">Signin</a> </p>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Entrance;
