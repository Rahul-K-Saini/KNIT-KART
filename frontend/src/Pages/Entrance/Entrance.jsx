import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { useState } from "react";
import * as Components from "./Components";
import axios from "axios";
import "./styles.css";
import style from "./Entrance.module.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [OTPLoading, setOTPLoading] = useState(false);

  const [showModalFP, setShowModalFP] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

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
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const otp = form.otp.value;

    const userData = {
      name,
      email,
      password,
      otp,
    };
    let ermsg = "";
    try {
      const { data } = await axios.post(
        "http://localhost:8000/user/register",
        userData,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        setSignIn(true);
        form.reset();
      } else {
        console.log(data);
        ermsg = data.message;
        let message = data.message.message;
        console.log(message);
        let error = message
          .substring(message.indexOf(":") + 1)
          .replaceAll(",", "\n");
        toast.error(error);
      }
    } catch (e) {
      console.log(e);
      toast.error(e);
      ermsg.length !== 0 ? toast.error(ermsg) : null;
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setOTPLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    try {
      const res = await axios.post("http://localhost:8000/user/send-otp", {
        email,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setOtpSent(true);
      } else {
        toast.error(res.data.message);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setOTPLoading(false);
    }
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
    try {
      const { data } = await axios.post(
        "http://localhost:8000/user/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        localStorage.setItem("token", JSON.stringify(data.data.token));
        const user = {
          name: data.data.user.name,
          profileImage: data.data.user.profile_pic,
        };
        toast.success(data.message);
        form.reset();
        navigate("/home");
      } else {
        toast.error(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleResetPassword = async(e) => {
    e.preventDefault();
    const form = e.target;
    const otp = form.otp.value;
    const password = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    if (password!== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const userData = {
      email,
      otp,
      password,
    };

    const res = await axios.post(
      "http://localhost:8000/user/forget-password",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if(res.data.success){
      toast.success(res.data.message);
      form.reset();
      setShowModalFP(false);
    }else{
      toast.error(res.data.message);
    }

  };

  return (
    <>
      <Toaster />
      <div className={`${style["desktop-form"]} bg-background`}>
        <Components.Container>
          {/* desktop -form for signUp */}
          <Components.SignUpContainer $signin={signIn}>
            <Components.Form onSubmit={handleSignUp}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                placeholder="Full Name"
                name="name"
                required
              />
              <Components.Input
                type="email"
                placeholder="Email(KNIT)"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex bg-[rgb(238,238,238)] rounded w-full items-center relative h-fit">
                <Components.Input
                  className="outline-none flex-grow px-4 border-black"
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GoEye className="" /> : <GoEyeClosed />}
                </button>
              </div>
              <button
                type="button"
                onClick={handleSendOTP}
                className="text-blue-700 underline"
              >
                {OTPLoading ? "Sending OTP..." : "Send OTP"}
              </button>
              <div className="w-full">
                <Components.Input
                  type="text"
                  name="otp"
                  placeholder="OTP"
                  required
                />
              </div>

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
              <div className="flex bg-[rgb(238,238,238)] rounded w-full items-center relative">
                <Components.Input
                  className="outline-none flex-grow"
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Password"
                  aria-label="Password input"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GoEye /> : <GoEyeClosed />}
                </button>
              </div>
              <Components.Anchor
                className="hover:cursor-pointer"
                onClick={() => setShowModalFP(true)}
              >
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
                <label htmlFor="">Full Name</label>{" "}
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="">Email(KNIT)</label>{" "}
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]} style={{ display: "flex" }}>
                <i className="bx bxs-envelope"></i>
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]} style={{ display: "flex" }}>
                <input type="text" name="otp" required />
                <label htmlFor="">OTP</label>{" "}
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
              <button
                type="button"
                onClick={handleSendOTP}
                className="text-blue-700 underline"
              >
                Send OTP
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
                  Don't have any account?{" "}
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

      {showModalFP && ( // forgot password modal
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Forgot Password</h3>
                <button onClick={() => setShowModalFP(false)}>❌</button>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                {!otpSent ? (
                  <form onSubmit={(e) => handleSendOTP(e)}>
                    <p className="text-sm text-gray-500">
                      Enter your email address and we’ll send you an OTP to
                      reset your password.
                    </p>
                    <div className="mt-4 flex flex-col gap-3">
                      <div>
                        <label htmlFor="">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <br />
                        <input
                          className="w-full p-2 bg-gray-100 outline-none"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-primary py-2 text-white rounded"
                      >
                        Send OTP
                      </button>
                    </div>
                  </form>
                ) : (
                  <form className="flex flex-col gap-2" onSubmit={(e) => handleResetPassword(e)}>
                    <div>
                      <label htmlFor="otp">Enter OTP</label>
                      <br></br>
                      <input
                        type="text"
                        className="w-full p-2 bg-gray-100 outline-none"
                        placeholder="Enter OTP"
                        name="otp"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="newPassword">Enter New Password</label>
                      <br></br>
                      <input
                        type="text"
                        className="w-full p-2 bg-gray-100 outline-none"
                        placeholder="Enter Password"
                        name="newPassword"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword">Confirm New Password</label>
                      <br></br> 
                      <input
                        type="text"
                        className="w-full p-2 bg-gray-100 outline-none"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary py-2 text-white rounded mt-2"
                    >
                      Reset Password
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
