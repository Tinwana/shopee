import express from "express";
import userController from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post("/verify-email", userController.verifyEmail);
userRoute.post("/register", userController.createUser);
userRoute.post("/login", userController.loginUser);
userRoute.post("/refresh-token", userController.refreshToken);
userRoute.post("/logout", userController.logOutUser);
userRoute.patch("/:id", userController.updateUser);
userRoute.delete("/:id", userController.deleteUser);
userRoute.get("/:id", userController.getDetailUser);
userRoute.get("/", userController.getAllUser);

export default userRoute;
