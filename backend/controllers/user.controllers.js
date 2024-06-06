import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import OTP from "../models/otp.models.js";
import nodemailer from 'nodemailer';
import dotenv from "dotenv";


dotenv.config();

export const handleUserRegistration = async (req, res) => {

    try {
        const { name, email, password, otp } = req.body;

        console.log(name, email, password, otp);

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: {
                    message: "User Already Exists"
                },
            });
        }

        // had to do it here for the time being as user creation is called after the password hashed and after password hash 
        // password length increases hence user can input one length of password so before creating user  password length is checked here 
        // i will find the better way to do it in the future |||| Apologies 🙏 for the inconvenience

        if (password.length < 8) {
            return res.send({
                success: false,
                message: {
                    message: "Password must be at least 8 characters long"
                }
            }
            )
        }

        if (!otp) {
            return res.status(200).send({
                success: false,
                message: "OTP is required"
            })
        }

        const existingOTP = await OTP.findOne({ email: email });
        console.log("existing otp", existingOTP.otp);   
        if (existingOTP.otp != otp) {
            return res.status(200).json({
                success: false,
                message: "Invalid OTP"
            })
        }


        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);


        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        await OTP.deleteMany({ email: email });

        return res.status(201).send({
            success: true,
            message: "Sign up Successful ! You can sign in now",
            user: newUser,
        });

    } catch (error) {
        console.error("Error registering user:", error);
        return res.send({
            success: false,
            message: error,
        });
    }
};


export const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const user = await User.findOne({ email });


        if (!user) {
            return res.status(200).send({
                message: "User not Registered",
                success: false,
            });
        }


        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(200).send({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "qazxswedc");

        return res.status(200).send({
            message: "Login successful!",
            data: {
                user,
                token,
            },
            success: true,
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).send({
            success: false,
            message: "Error logging in user",
        });
    }
};


export const authController = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.body.userId });
        if (!user) {
            return res.status(200).send({
                message: "User not found",
                success: false,
            });
        } else {
            return res.status(200).send({
                message: "User Found",
                data: {
                    user,
                },
                success: true,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Auth error`,
        });
    }
};


export const handleOtp = async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
   
    console.log("email",email);
   
    try {
        
        if (!email) {
            return res.json({
                success: false,
                message: "Email is required"
            });
        }

        if (email.split("@")[1] != "knit.ac.in") {
            return res.json({
                success: false,
                message: "Enter Knit Domain Email Address"
            })
        }



        const otp = Math.floor(Math.random() * 9000 + 1000);


       

        // Send OTP via email
        const success = await sendOTPByEmail(email, otp);

        if (success) {
            const data = await OTP.create({
                email,
                otp
            });
            return res.json({
                success: true,
                message: "OTP sent successfully"
            });
        } else {
            throw new Error("Error sending OTP");
        }
    } catch (error) {
        console.error(error);
        return res.json({
            success: false,
            message: "Something went wrong"
        });
    }
};

async function sendOTPByEmail(email, otp) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: {
                name: 'KNIT KART',
                address: process.env.EMAIL_USER
            },
            to: email,
            subject: "OTP for email verification",
            text: `Your verification OTP is ${otp}`,
        };

        const sendMail = await transporter.sendMail(mailOptions);
        console.log("sendMail",sendMail);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


export async function handleForgetPassword(req,res){
    const {email,otp, password} = req.body;
    const existingOTP = await OTP.findOne({ email: email });
    if(!existingOTP){
        return res.json({
            success: false,
            message: "OTP not found"
        });
    }

    if(existingOTP.otp!= otp){
        return res.json({
            success: false,
            message: "Wrong OTP Entered"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const updatePassword = await User.updateOne({email: email}, {password: hashedPassword});
    console.log(updatePassword);

    await OTP.deleteMany({ email: email });
    
    return res.json({
        success: true,
        message: "Password Updated Successfully"
    });


}

export async function handleUpdateUser(req,res){
    const {email, name, hostel, year, branch, gender } = req.body;
    const updatedUSer = await User.updateOne({email: email}, {name: name, hostel: hostel, year: year, branch: branch, gender: gender});
    console.log(updatedUSer);
    return res.json({
        success: true,
        message: "User Updated Successfully"
    });
}