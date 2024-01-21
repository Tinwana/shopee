import userRoute from "./user.router.js";

export const route = (app) => {
  app.use("/api/v1/user", userRoute);
};
