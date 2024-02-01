import shopRoute from "./shop.route.js";
import userRoute from "./user.router.js";

export const route = (app) => {
  app.use("/api/v1/user", userRoute);
  app.use("/api/v1/seller", shopRoute);
};
