import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const handleUserRegistration = async (req, res) => {

    try {
        const { name, email, password, contact } = req.body;

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

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const opt = Math.random()*9000+1000;

        const newUser = await User.create({
            name,
            email,
            contact,
            password: hashedPassword,
        });

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
        console.log(email,password);

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