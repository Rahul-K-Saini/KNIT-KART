import { useRef, useState } from "react";
import * as Components from "./Components";
import axios from "axios";
import "./styles.css";
import style from "./Entrance.module.css";

function App() {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        password: '',
        contact: '',
    })

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({
        fullname: '',
        email: '',
        contact: '',
        password: ''
    })

    const [signIn, setSignIn] = useState(true);

    const [isLoginPage, setIsLoginPage] = useState({
        loginPage: true,
        class: '',
    });

    const loginToggle = () => {
        setIsLoginPage((prevState) => ({
            loginPage: !prevState.loginPage,
            class: prevState.loginPage ? "animate-signUp" : "animate-signIn",
        }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (error.email !== "" || error.contact !== "" || error.password !== "") {
            alert("Enter valid details");
            return;
        }
        setUser({
            email: '',
            password: '',
            contact: '',
        })
        console.log(user.email, user.password, user.contact);
        const { data } = await axios.post('http://localhost:8000/user/register', {
            fullname: 'fullname field add karo ya backend se maangwao mat',
            email: user.email,
            password: user.password,
            contact_no: user.contact
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        console.log(data.message);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (error.email !== "" || error.password !== "") {
            alert("Enter valid details");
            return;
        }
        setUserLogin({
            email: '',
            password: '',
        })
        const { data } = await axios.post('http://localhost:8000/user/login', {
            email: userLogin.email,
            password: userLogin.password,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        console.log(data.message);
    }

    return (
        <>
            <div className={`${style["desktop-form"]} bg-background`}>
                {/* <ResponsiveContainer> */}
                <Components.Container>
                    <Components.SignUpContainer $signin={signIn}>
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>

                            <Components.Input
                                onChange={(e) => {
                                    if (e.target.value.trim().length<3) {
                                        setError({ ...error, fullname: "Enter Valid Name, Full name must contain more than 2 letters" });
                                    } else {
                                        setError({ ...error, fullname: "" });
                                        setUser({ ...user, fullname: e.target.value.trim() });
                                    }
                                }}
                                type="text"
                                placeholder="Full Name"
                                style={{
                                    outline: "none",
                                    border: "2px solid",
                                    borderColor: error.fullname ? "red" : "",
                                }}
                            />
                            <small>{error.fullname}</small>

                            <Components.Input
                                onChange={(e) => {
                                    if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
                                        setError({ ...error, email: "Enter Knit Domain Email" });
                                    } else {
                                        setError({ ...error, email: "" });
                                        setUser({ ...user, email: e.target.value });
                                    }
                                }}
                                type="email"
                                placeholder="Email(KNIT)"
                                style={{
                                    outline: "none",
                                    border: "2px solid",
                                    borderColor: error.email ? "red" : "",
                                }}
                            />
                            <small>{error.email}</small>

                            <Components.Input
                                onChange={(e) => {
                                    if (e.target.value.length !== 10) {
                                        setError({ ...error, contact: "Invalid Contact number" });
                                    } else {
                                        setError({ ...error, contact: "" });
                                        setUser({ ...user, contact: e.target.value });
                                    }
                                }}
                                style={{
                                    outline: "none",
                                    border: "2px solid",
                                    borderColor: error.contact ? "red" : "",
                                }}
                                type="text"
                                placeholder="Contact No."
                            />
                            <small>{error.contact}</small>

                            <Components.Input
                                onChange={(e) => {
                                    if (e.target.value.length < 5) {
                                        setError({ ...error, password: "Password must be at least 5 characters long" });
                                    } else {
                                        setError({ ...error, password: "" });
                                        setUser({ ...user, password: e.target.value });
                                    }
                                }}
                                style={{
                                    outline: "none",
                                    border: "2px solid",
                                    borderRadius: "5px",
                                    borderColor: error.password ? "red" : "",
                                }}
                                type="password"
                                placeholder="Password"
                            />
                            <small>{error.password}</small>
                            <Components.Button onClick={handleSignUp}>
                                Sign Up
                            </Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer $signin={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input
                                onChange={(e) => {
                                    if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
                                        setError({ ...error, email: "Enter Knit Domain Email" });
                                    } else {
                                        setError({ ...error, email: "" });
                                        setUserLogin({ ...userLogin, email: e.target.value });
                                    }
                                }}
                                type="email"
                                placeholder="Email(KNIT)"
                                style={{
                                    outline: "none",
                                    border: "2px solid",
                                    borderColor: error.email ? "red" : "",
                                }}
                            />
                            <small>{error.email}</small>
                            <Components.Input
                                onChange={(e) => {
                                    if (e.target.value.length < 5) {
                                        setError({ ...error, password: "Password must be at least 5 characters long" });
                                    } else {
                                        setError({ ...error, password: "" });
                                        setUserLogin({ ...userLogin, password: e.target.value });
                                    }
                                }}
                                style={{
                                    outline: "none",
                                    border: "2px solid",
                                    borderRadius: "5px",
                                    borderColor: error.password ? "red" : "",
                                }}
                                type="password"
                                placeholder="Password"
                            />
                            <small>{error.password}</small>
                            <Components.Anchor href="#">
                                Forgot your password?
                            </Components.Anchor>
                            <Components.Button onClick={handleSignIn}>
                                Sign In
                            </Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer $signin={signIn}>
                        <Components.Overlay $signin={signIn}>
                            <Components.LeftOverlayPanel $signin={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => setSignIn(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel $signin={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => setSignIn(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
                {/* </ResponsiveContainer> */}
            </div>

            <div className={`${style["mobile-form"]} bg-background`}>
                <div className={`wrapper ${isLoginPage.class}`}>
                    <div className="form-wrapper sign-Up">
                        <form action="">
                            <h2>Sign Up</h2>
                            
                            <div className={style["input-group"]}>

                                <input
                                    value={user.fullname}
                                    required
                                    onChange={(e) => {
                                        if (e.target.value.trim().length<3) {
                                            setError({ ...error, fullname: "Enter Valid Name, Full name must contain more than 2 letters" });
                                        } else {
                                            setError({ ...error, fullname: "" });
                                            setUser({ ...user, fullname: e.target.value.trim() });
                                        }
                                        setUser({ ...user, fullname: e.target.value.trim() });
                                    }}
                                    type="text"
                                />
                                <small style={{ display: "block" }}>{error.fullname}</small>
                                <label htmlFor="">Full Name</label>{" "}
                                <i className="bx bxs-user"></i>
                            </div>

                            <div className={style["input-group"]}>

                                <input
                                    value={user.email}
                                    required
                                    onChange={(e) => {
                                        if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
                                            setError({ ...error, email: "Enter Knit Domain Email" });
                                        } else {
                                            setError({ ...error, email: "" });
                                        }
                                        setUser({ ...user, email: e.target.value });
                                    }}
                                    type="email"
                                />
                                <small style={{ display: "block" }}>{error.email}</small>


                                <label htmlFor="">Email(KNIT)</label>{" "}
                                <i className="bx bxs-user"></i>
                            </div>


                            <div className={style["input-group"]}>
                                <input
                                    type="text"
                                    value={user.contact}
                                    required
                                    onChange={(e) => {
                                        if (e.target.value.length !== 10) {
                                            setError({ ...error, contact: "Invalid Contact number" });
                                        } else {
                                            setError({ ...error, contact: "" });
                                        }
                                        setUser({ ...user, contact: e.target.value });
                                    }}
                                />
                                <small style={{ display: "block" }}>{error.contact}</small>
                                <label htmlFor="">Contact No.</label>{" "}
                                <i className="bx bxs-envelope"></i>
                                <i className="bx bxs-user"></i>
                            </div>
                            <div className={style["input-group"]}>
                                <input
                                    type="password"
                                    value={user.password}
                                    required
                                    onChange={(e) => {
                                        if (e.target.value.length < 5) {
                                            setError({ ...error, password: "Password must be at least 5 characters long" });
                                        } else {
                                            setError({ ...error, password: "" });
                                        }
                                        setUser({ ...user, password: e.target.value });
                                    }}
                                />
                                <small style={{ display: "block" }}>{error.password}</small>
                                <label htmlFor="">Password</label>{" "}
                                <i className="bx bxs-lock-alt"></i>
                            </div>
                            <button
                                type="submit"
                                onClick={handleSignUp}
                                className={style["btn"]}
                            >
                                Sign Up
                            </button>

                            <div className={style["Sign-link"]}>
                                <p>
                                    Already have an account?{" "}
                                    <a
                                        href="#"
                                        onClick={loginToggle}
                                        className={style["SignIn-link"]}
                                    >
                                        Sign In
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="form-wrapper sign-in">
                        <form action="">
                            <h2>Login</h2>
                            <div className={style["input-group"]}>
                                <input
                                    value={userLogin.email}
                                    required
                                    onChange={(e) => {
                                        if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
                                            setError({ ...error, email: "Enter Knit Domain Email" });
                                        } else {
                                            setError({ ...error, email: "" });
                                        }
                                        setUserLogin({ ...userLogin, email: e.target.value });
                                    }}
                                    type="email"
                                />
                                <small style={{ display: "block" }}>{error.email}</small>
                                <label htmlFor="">Email</label> <i className="bx bxs-user"></i>
                            </div>

                            <div className={style["input-group"]}>
                                <input
                                    value={userLogin.password}
                                    required
                                    onChange={(e) => {
                                        if (e.target.value.length < 5) {
                                            setError({ ...error, password: "Password must be at least 5 characters long" });
                                        } else {
                                            setError({ ...error, password: "" });
                                        }
                                        setUserLogin({ ...userLogin, password: e.target.value });
                                    }}
                                    type="password"
                                />
                                <small style={{ display: "block" }}>{error.password}</small>
                                <label htmlFor="">Password</label>
                                <i className="bx bxs-lock-alt"></i>
                            </div>
                            <div className={style["forgot-password"]}>
                                <a href="">Forgot Password?</a>
                            </div>
                            <button
                                type="submit"
                                onClick={handleSignIn}
                                className={style["btn"]}
                            >
                                Login
                            </button>
                            <div className={style["Sign-link"]}>
                                <p>
                                    Don't have an account?{" "}
                                    <a
                                        href="#"
                                        onClick={loginToggle}
                                        className={style["SignUp-link"]}
                                    >
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
