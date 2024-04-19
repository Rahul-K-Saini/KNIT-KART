import { useState } from "react";
import * as Components from "./Components";
import axios from "axios";
import "./styles.css";
import style from "./Entrance.module.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const navigate = useNavigate();

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

    const form = e.target;
    const name = form.fullname.value;
    const email = from.email.value;
    const password = from.password.value;
    const contact = form.contact.value;

    const userData = {
      name,
      email,
      password,
      contact,
    };

    const { data } = await axios.post(
      "http://localhost:8000/user/register",
      userData,
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
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      email,
      password,
    };

    const { data } = await axios.post(
      "http://localhost:8000/user/login",
      userData,
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
    <Toaster/>
      <div className={`${style["desktop-form"]} bg-background`}>
        <Components.Container>
          {/* desktop -form for signUp */}
          <Components.SignUpContainer $signin={signIn}>
            <Components.Form onSubmit={handleSignUp}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                placeholder="Full Name"
                name="fullname"
              />
              <Components.Input
                type="email"
                placeholder="Email(KNIT)"
                name="email"
              />
              <Components.Input
                type="text"
                name="contact"
                placeholder="Contact No."
              />
              <Components.Input
                name="password"
                type="password"
                placeholder="Password"
              />
              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          {/* // desktop -form for sign in */}
          <Components.SignInContainer $signin={signIn}>
            <Components.Form onSubmit={handleSignIn}>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="email"
                placeholder="Email(KNIT)"
                name="email"
              />
              <Components.Input
                name="password"
                type="password"
                placeholder="Password"
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button type="submit">Sign In</Components.Button>
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
      </div>

      {/* mobile - form for sign up */}
      <div className={`${style["mobile-form"]} bg-background`}>
        <div className={`wrapper ${isLoginPage.class}`}>
          <div className="form-wrapper sign-Up">
            <form onSubmit={handleSignUp}>
              <h2>Sign Up</h2>
              <div className={style["input-group"]}>
                <input name="fullname" type="text" required />
                <label htmlFor="">Fullname</label>{" "}
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input name="email" type="email" required />
                <label htmlFor="">Email(KNIT)</label>{" "}
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input type="text" name="contact" required />
                <label htmlFor="">Contact No.</label>{" "}
                <i className="bx bxs-envelope"></i>
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input type="password" name="password" required />
                <label htmlFor="">Password</label>{" "}
                <i className="bx bxs-lock-alt"></i>
              </div>
              <button type="submit" className={style["btn"]}>
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

          {/* mobile -form for sign in */}
          <div className="form-wrapper sign-in">
            <form onSubmit={handleSignIn}>
              <h2>Login</h2>
              <div className={style["input-group"]}>
                <input type="email" name="email" required />
                <label htmlFor="">Email</label> <i className="bx bxs-user"></i>
              </div>

              <div className={style["input-group"]}>
                <input type="password" name="password" required />

                <label htmlFor="">Password</label>
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
