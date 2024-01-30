import express from "express";
import userController from "../controllers/user.controller.js";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";

const userRoute = express.Router();

userRoute.post("/verify-email", userController.verifyEmail);
userRoute.post("/register", userController.createUser);
userRoute.post("/login", userController.loginUser);
userRoute.post("/refresh-token", userController.refreshToken);
userRoute.post("/logout", userController.logOutUser);
userRoute.patch("/:id", isAuth, userController.updateUser);
userRoute.delete("/:id", isAuth, userController.deleteUser);
userRoute.get("/account/:id" /* , isAuth */, userController.getDetailAccount);
userRoute.get("/account", isAdmin, userController.getAllAccount);
userRoute.get("/:id", isAuth, userController.getDetailUser);
userRoute.get("/", isAdmin, userController.getAllUser);

export default userRoute;
