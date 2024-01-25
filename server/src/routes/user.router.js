import express from "express";
import userController from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post("/verify-email", userController.verifyEmail);
userRoute.post("/register", userController.createUser);
userRoute.post("/login", userController.loginUser);

export default userRoute;
