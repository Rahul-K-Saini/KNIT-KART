import React, { useState } from "react";
import * as Components from './Components';
//  import { ResponsiveContainer } from './ResponsiveComponents';
import "./styles.css";
import style from "./Entrance.module.css";

function App() {
    const [signIn, toggle] = React.useState(true);

    const [isLoginPage, setIsLoginPage] = useState({ loginPage: true, class: '' });

    const loginToggle = () => {
        if (isLoginPage.loginPage) {
            setIsLoginPage({ loginPage: false, class: 'animate-signUp' });
        } else {
            setIsLoginPage({ loginPage: true, class: 'animate-signIn' });
        }
    }

    return (
        <>
            <div className={style["desktop-form"]}>
                
                {/* <ResponsiveContainer> */}
                <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Email(KNIT)' />
                            <Components.Input type='email' placeholder='Contact No.' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Input type='password' placeholder='Confirm Password' />
                            {/* <Components.Input type='password' placeholder='Password' /> */}
                            {/* <Components.Input type='password' placeholder='Confirm Password' />
                      <Components.Input type='password' placeholder='Rigster Now' /> */}
                            <Components.Button>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>


                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Anchor href=''>Forgot your password?</Components.Anchor>
                            <Components.Button>Sigin In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>


                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sigin Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>

                </Components.Container>
                {/* </ResponsiveContainer> */}
            </div>



            <div className={style["mobile-form"]}>
                <div className={`wrapper ${isLoginPage.class}`}>
                    <div className="form-wrapper sign-Up">
                        <form action="">
                            <h2>Sign Up</h2>
                            <div className={style["input-group"]}>
                                <input type="text" required />
                                <label for="">Email(KNIT)</label>
                                <i className='bx bxs-user'></i>
                            </div>
                            <div className={style["input-group"]}>
                                <input type="email" required />
                                <label for="">Contact No.</label>
                                <i className='bx bxs-envelope'></i>
                                <i className='bx bxs-user'></i>
                            </div>

                            <div className={style["input-group"]}>
                                <input type="password" required />
                                <label for="">Password</label>
                                <i className='bx bxs-lock-alt'></i>
                            </div>

                            <div className={style["input-group"]}>
                                <input type="password" required />
                                <label for="">Confirm Password</label>
                                <i className='bx bxs-lock-alt'></i>
                            </div>

                            {/* <div className={style["remember"]}>
                                <label><input type="checkbox"/> I agree to the terms & conditions</label>
                            </div> */}
                            <button type="submit" className={style["btn"]}>Sign Up</button>

                            <div className={style["Sign-link"]}>
                                <p>Already have an account? <a href="#" onClick={loginToggle} className={style["SignIn-link"]}>Sign In</a></p>
                            </div>
                        </form>
                    </div>

                    <div className="form-wrapper sign-in">
                        <form action="">
                            <h2>Login</h2>
                            <div className={style["input-group"]}>
                                <input type="text" required />
                                <label for="">Email</label>
                                <i className='bx bxs-user'></i>
                            </div>

                            <div className={style["input-group"]}>
                                <input type="password" required />
                                <label for="">Password</label>
                                <i className='bx bxs-lock-alt'></i>
                            </div>
                            <div className={style["forgot-password"]}>
                                <a href="">Forgot Password?</a>
                            </div>
                            <button type="submit" className={style["btn"]}>Login</button>
                            <div className={style["Sign-link"]}>
                                <p>Don't have an account? <a href="#" onClick={loginToggle} className={style["SignUp-link"]}>Sign Up</a></p>
                            </div>

                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default App;