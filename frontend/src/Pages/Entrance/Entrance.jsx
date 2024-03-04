import React, { useRef, useState } from "react";
import * as Components from "./Components";
// import { ResponsiveContainer } from './ResponsiveComponents';
import "./styles.css";
import style from "./Entrance.module.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const contactRef = useRef();

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

  const handleSignUp = (e) => {
    e.preventDefault();
    if (errorEmail !== "" || errorContact !== "" || errorPassword !== "") {
      alert("Enter valid details");
      return;
    }
    setEmail("");
    setContact("");
    setPassword("");
    console.log(email, password, contact);
  };

  return (
    <>
      <div className={style["desktop-form"]}>
        {/* <ResponsiveContainer> */}
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
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
                ref={emailRef}
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
                ref={contactRef}
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
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
              <small>{errorPassword}</small>
              <Components.Button onClick={handleSignUp}>
                Sign Up
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input type="email" placeholder="Email" />
              <Components.Input type="password" placeholder="Password" />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button>Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
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
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="">Email(KNIT)</label>{" "}
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
                <label htmlFor="">Contact No.</label>{" "}
                <i className="bx bxs-envelope"></i>
                <i className="bx bxs-user"></i>
              </div>

              <div className={style["input-group"]}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
                <input type="text" required />
                <label htmlFor="">Email</label> <i className="bx bxs-user"></i>
              </div>

              <div className={style["input-group"]}>
                <input type="password" required />
                <label htmlFor="">Password</label>{" "}
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className={style["forgot-password"]}>
                <a href="">Forgot Password?</a>
              </div>
              <button type="submit" className={style["btn"]}>
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
