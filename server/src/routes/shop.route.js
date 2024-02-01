import express from "express";
import { isAdmin, isAuth, isSeller } from "../middlewares/authMiddleware.js";
import shopController from "../controllers/shop.controller.js";

const shopRoute = express.Router();
shopRoute.post("/verify", isAuth, shopController.verifyShop);
shopRoute.post("/active", isAuth, shopController.activeShop);
// shopRoute.delete("/:id",shopController.deleteShop)
// shopRoute.patch("/:id",shopController.updateShop)
shopRoute.get("/:id", isSeller, shopController.getDetailShop);
// shopRoute.get("/",isAdmin,shopController.getAllShop)
export default shopRoute;
