import express from "express";
import { handleUserLogin,handleUserRegistration,authController, handleForgetPassword } from "../controllers/user.controllers.js";
import protect from "../middlewares/auth.user.js";
import { handleOtp } from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.post("/register", handleUserRegistration);
userRouter.post('/login', handleUserLogin);
userRouter.post("/get-user", protect, authController);
userRouter.post("/send-otp", handleOtp);
userRouter.post("/forget-password", handleForgetPassword);

export default userRouter;

