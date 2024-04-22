import express from "express";
import { handleUserLogin,handleUserRegistration,authController } from "../controllers/user.controllers.js";
import protect from "../middlewares/auth.user.js";
const userRouter = express.Router();

userRouter.post("/register", handleUserRegistration);
userRouter.post('/login', handleUserLogin);
userRouter.post("/get-user", protect, authController);

export default userRouter;

