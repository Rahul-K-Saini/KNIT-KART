import React, { useState } from 'react';
import styles from './entrance.module.css';
import { Link } from 'react-router-dom';
import "./entrance.modules.css";
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
        <div classNameName='bg-cyan-200 w-full h-screen px-12 py-14'>
            <div classNameName=' rounded flex w-full h-full'>
                {/* Log In Section */}
                <div classNameName='flex flex-col justify-center relative items-center space-y-3 bg-slate-300 w-1/2 rounded-3xl'>
                    {/* Slider Window */}
                    <div classNameName={`bg-pink-500 absolute top-0 w-full h-full z-10 rounded-3xl ${!isLogin.login ? styles['login-slide'] : styles['signup-slide']}`}>
                        <div classNameName={styles['slider-window']}>
                            <h1>{isLogin.headingText}</h1>
                            <Link to={`?mode=${isLogin.login ? 'signup' : 'login'}`} onClick={handleToggle}>{isLogin.buttonText}</Link>
                        </div>
                    </div>
                    <h1 classNameName='text-4xl font-bold text-zinc-800'>Log In</h1>
                    <div classNameName='flex flex-col justify-center items-start space-y-8 py-7'>
                        <input type="email" id="email" placeholder='Enter Your Registered Email' classNameName='drop-shadow-xl text-xl p-2 rounded font-light' />
                        <input type="password" id="password" placeholder='Enter Your Password' classNameName='drop-shadow-xl text-xl p-2 rounded font-light' />
                        <button classNameName='bg-blue-600 text-white px-3 py-2 rounded-md text-xl drop-shadow-xl'>Log In</button>
                        <a href="" classNameName='text-blue-600 underline'>Forgot Password?</a>
                    </div>
                </div>

                {/* Sign Up Section */}
                
                <form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input className="input " type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>

            </div>
        </div>
    );
}

export default Entrance;
