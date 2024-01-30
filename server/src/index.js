import { v2 as cloudinary } from "cloudinary";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/dbConfig.js.js";
import { route } from "./routes/index.js";
import { prisma } from "./config/prismaConfig.js";
dotenv.config({});
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json(), express.urlencoded({ extended: false }));
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    status: "error",
    message: message,
    statusCode,
  });
});
app.use("/api/health", (req, res, next) => {
  return res.status(200).json({
    health: "OK",
  });
});
const port = process.env.PORT || 8001;
// connectDb();
prisma
  .$connect()
  .then(() => {
    console.log("connect prisma successfully");
  })
  .catch((err) => {
    console.log("connect prisma failed" + err);
  });
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
route(app);

app.listen(port, () => {
  console.log("server listening on " + port);
});
