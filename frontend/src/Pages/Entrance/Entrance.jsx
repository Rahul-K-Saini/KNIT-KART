import React, { useState } from "react";
import * as Components from "./Components";
import axios from "axios";
// import { ResponsiveContainer } from './ResponsiveComponents';
import "./styles.css";
import style from "./Entrance.module.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [mob_email, setMobEmail] = useState("");
  const [mob_password, setMobPassword] = useState("");
  const [mob_contact, setMobContact] = useState("");

  const [mob_loginEmail, setMobLoginEmail] = useState("");
  const [mob_loginPassword, setMobLoginPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorContact, setErrorContact] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [signIn, setSignIn] = useState(true);

  const [isLoginPage, setIsLoginPage] = useState({
    loginPage: true,
    class: "",
  });

  const loginToggle = () => {
    setIsLoginPage((prevState) => ({
      loginPage: !prevState.loginPage,
      class: prevState.loginPage ? "animate-signUp" : "animate-signIn",
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(e.name);
    if (errorEmail !== "" || errorContact !== "" || errorPassword !== "") {
      alert("Enter valid details");
      return;
    }
    setEmail("");
    setContact("");
    setPassword("");
    console.log(email, password, contact);
    const { data } = await axios.post(
      "http://localhost:8000/user/register",
      {
        fullname: "fullname field add karo ya backend se maangwao mat",
        email: email,
        password: password,
        contact_no: contact,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(data.message);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (errorEmail !== "" || errorPassword !== "") {
      alert("Enter valid details");
      return;
    }
    setEmail("");
    setContact("");
    setPassword("");
    const { data } = await axios.post(
      "http://localhost:8000/user/login",
      {
        email: loginEmail,
        password: loginPassword,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(data.message);
  };

  const handleMobSignUp = async (e) => {
    e.preventDefault();
    if (errorEmail !== "" || errorContact !== "" || errorPassword !== "") {
      alert("Enter valid details");
      return;
    }
    setMobEmail("");
    setMobContact("");
    setMobPassword("");
    console.log(mob_email, mob_password, mob_contact);
    const { data } = await axios.post(
      "http://localhost:8000/user/register",
      {
        fullname: "fullname field add karo ya backend se maangwao mat",
        email: mob_email,
        password: mob_password,
        contact_no: mob_contact,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(data.message);
  };

  const handleMobSignIn = async (e) => {
    e.preventDefault();
    if (errorEmail !== "" || errorPassword !== "") {
      alert("Enter valid details");
      return;
    }
    setMobEmail("");
    setMobContact("");
    setMobPassword("");
    const { data } = await axios.post(
      "http://localhost:8000/user/login",
      {
        email: mob_loginEmail,
        password: mob_loginPassword,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(data.message);
  };

  return (
    <>
      <div className={style["desktop-form"]}>
        {/* <ResponsiveContainer> */}
        <Components.Container>
          <Components.SignUpContainer signin={signIn}>
            <Components.Form>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                onChange={(e) => {
                  if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
                    setErrorEmail("Enter Knit Domain Email");
                  } else {
                    setErrorEmail("");
                    setEmail(e.target.value);
                  }
                }}
                type="email"
                placeholder="Email(KNIT)"
                style={{
                  outline: "none",
                  border: "2px solid",
                  borderColor: errorEmail ? "red" : "",
                }}
              />
              <small>{errorEmail}</small>
              <Components.Input
                onChange={(e) => {
                  if (e.target.value.length !== 10) {
                    setErrorContact("Invalid Contact number");
                  } else {
                    setErrorContact("");
                    setContact(e.target.value);
                  }
                }}
                style={{
                  outline: "none",
                  border: "2px solid",
                  borderColor: errorContact ? "red" : "",
                }}
                type="text"
                placeholder="Contact No."
              />
              <small>{errorContact}</small>
              <Components.Input
                onChange={(e) => {
                  if (e.target.value.length < 5) {
                    setErrorPassword(
                      "Password must be at least 5 characters long"
                    );
                  } else {
                    setErrorPassword("");
                    setPassword(e.target.value);
                  }
                }}
                style={{
                  outline: "none",
                  border: "2px solid",
                  borderRadius: "5px",
                  borderColor: errorPassword ? "red" : "",
                }}
                type="password"
                placeholder="Password"
              />
              <small>{errorPassword}</small>
              <Components.Button onClick={handleSignUp}>
                Sign Up
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signin={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                onChange={(e) => {
                  if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
                    setErrorEmail("Enter Knit Domain Email");
                  } else {
                    setErrorEmail("");
                    setLoginEmail(e.target.value);
                  }
                }}
                type="email"
                placeholder="Email(KNIT)"
                style={{
                  outline: "none",
                  border: "2px solid",
                  borderColor: errorEmail ? "red" : "",
                }}
              />
              <small>{errorEmail}</small>
              <Components.Input
                onChange={(e) => {
                  if (e.target.value.length < 5) {
                    setErrorPassword(
                      "Password must be at least 5 characters long"
                    );
                  } else {
                    setErrorPassword("");
                    setLoginPassword(e.target.value);
                  }
                }}
                style={{
                  outline: "none",
                  border: "2px solid",
                  borderRadius: "5px",
                  borderColor: errorPassword ? "red" : "",
                }}
                type="password"
                placeholder="Password"
              />
              <small>{errorPassword}</small>
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button onClick={handleSignIn}>
                Sign In
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signin={signIn}>
            <Components.Overlay signin={signIn}>
              <Components.LeftOverlayPanel signin={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signin={signIn}>
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

      <div className={style["mobile-form"]}>
        <div className={`wrapper ${isLoginPage.class}`}>
          <div className="form-wrapper sign-Up">
            <form action="">
              <h2>Sign Up</h2>
              <div className={style["input-group"]}>
                <input
                  value={mob_email}
                  required
                  onChange={(e) => {
                    if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
                      setErrorEmail("Enter Knit Domain Email");
                    } else {
                      setErrorEmail("");
                    }
                    setMobEmail(e.target.value);
                  }}
                  type="email"
                />
                <small style={{ display: "block" }}>{errorEmail}</small>
                <label htmlFor="">Email(KNIT)</label>{" "}
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input
                  type="text"
                  value={mob_contact}
                  required
                  onChange={(e) => {
                    if (e.target.value.length !== 10) {
                      setErrorContact("Invalid Contact number");
                    } else {
                      setErrorContact("");
                    }
                    setMobContact(e.target.value);
                  }}
                />
                <small style={{ display: "block" }}>{errorContact}</small>
                <label htmlFor="">Contact No.</label>{" "}
                <i className="bx bxs-envelope"></i>
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input
                  type="password"
                  value={mob_password}
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 5) {
                      setErrorPassword(
                        "Password must be at least 5 characters long"
                      );
                    } else {
                      setErrorPassword("");
                    }
                    setMobPassword(e.target.value);
                  }}
                />
                <small style={{ display: "block" }}>{errorPassword}</small>
                <label htmlFor="">Password</label>{" "}
                <i className="bx bxs-lock-alt"></i>
              </div>
              <button
                type="submit"
                onClick={handleMobSignUp}
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
                  value={mob_loginEmail}
                  required
                  onChange={(e) => {
                    if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
                      setErrorEmail("Enter Knit Domain Email");
                    } else {
                      setErrorEmail("");
                    }
                    setMobLoginEmail(e.target.value);
                  }}
                  type="email"
                />
                <small style={{ display: "block" }}>{errorEmail}</small>
                <label htmlFor="">Email</label> <i className="bx bxs-user"></i>
              </div>

              <div className={style["input-group"]}>
                <input
                  value={mob_loginPassword}
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 5) {
                      setErrorPassword(
                        "Password must be at least 5 characters long"
                      );
                    } else {
                      setErrorPassword("");
                    }
                    setMobLoginPassword(e.target.value);
                  }}
                  type="text"
                />
                <small style={{ display: "block" }}>{errorPassword}</small>
                <label htmlFor="">Password</label>
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className={style["forgot-password"]}>
                <a href="">Forgot Password?</a>
              </div>
              <button
                type="submit"
                onClick={handleMobSignIn}
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
