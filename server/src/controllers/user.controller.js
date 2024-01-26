// import { v2 as cloudinary } from "cloudinary";
import findUserByEmail from "../util/findUserByEmail.js";
import { sendMail } from "../util/sendMail.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import ActivationToken from "../models/activation-token.schema.js";
import User from "../models/user.schema.js";
import {
  generateAccessToken,
  generateRefreshToken,
  refreshTokenService,
} from "../util/jwtToken.js";
import { options } from "../util/cookiesOptions.js";

dotenv.config({});
class userController {
  async verifyEmail(req, res, next) {
    try {
      const createActivationToken = (user) => {
        return jwt.sign({ email: user.email }, process.env.ACTIVATION_SECRET, {
          expiresIn: "5m",
        });
      };
      const { email } = req.body;
      const existUser = await findUserByEmail(email);
      if (existUser) {
        return res.status(401).json({
          status: "failure",
          message: "User already exists",
        });
      }
      // const myCloud = await cloudinary.uploader.upload(avatar, {
      //   folder: "avatars",
      // });
      const user = {
        email: email,
      };
      const activationToken = createActivationToken(user);
      const exitsEmailToken = await ActivationToken.findOne({
        email: email,
      });
      if (exitsEmailToken)
        await ActivationToken.deleteOne({ email: exitsEmailToken.email });
      await ActivationToken.create({
        token: activationToken,
        email,
      });
      const activationUrl = `${process.env.client}/register/${activationToken}`;
      console.log(activationUrl);
      try {
        await sendMail({
          email,
          subject: "Activate your account",
          activeLink: activationUrl,
        });
        res.status(201).json({
          status: "success",
          message: `Please check your email:- ${user.email} to activate your account!`,
        });
      } catch (error) {
        return next(error);
      }
    } catch (error) {
      return next(error);
    }
  }
  async createUser(req, res, next) {
    try {
      const { name, password, phoneNumber } = req.body;
      const activationToken = req.headers.activation_token;
      const userEmail = jwt.verify(
        activationToken,
        process.env.ACTIVATION_SECRET,
        async function (err, payload) {
          if (err) {
            return res.status(400).json({
              status: "failure",
              message: "token expired!",
            });
          }
          const hashPassword = await argon2.hash(password);

          const createUser = await User.create({
            name,
            password: hashPassword,
            phoneNumber,
            email: payload?.email,
          });
          if (createUser) {
            return res.status(200).json({
              status: "success",
              message: "User created successfully!",
              data: createUser,
            });
          }
        }
      );
    } catch (error) {
      next(error);
    }
  }
  async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const checkUser = await User.findOne({ email: email }).select("password");
      if (!email || !password) {
        return res.status(401).json({
          status: "failure",
          message: "The input is required",
        });
      } else if (checkUser === null) {
        return res.status(401).json({
          status: "failure",
          message: "User is not found!",
        });
      } else {
        const comparePassword = argon2.verify(checkUser.password, password);
        if (!comparePassword) {
          return res.status(400).json({
            status: "failure",
            message: "Password is incorrect!",
          });
        } else {
          const accessToken = generateAccessToken({
            id: checkUser._id,
            role: checkUser.role,
          });
          const refreshToken = generateRefreshToken({
            id: checkUser._id,
            role: checkUser.role,
          });
          const user = await User.findOne({ email: email });
          return res
            .status(200)
            .cookie("refresh_token", refreshToken, options)
            .json({
              status: "success",
              message: "sign in success!",
              accessToken,
            });
        }
      }
    } catch (error) {
      next(error);
    }
  }
  async getDetailUser(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!userId) {
        return res.status(400).json({
          status: "failure!",
          message: "User di param is required!",
        });
      } else if (user == null) {
        return res.status(400).json({
          status: "failure",
          message: "user not found!",
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "User has found!",
          data: user,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async updateUser(req, res, next) {
    try {
      const userId = req.params.id;
      const { name, phoneNumber, address, avatar, role } = req.body;
      // const hash = bcrypt.hashSync(password, 10);
      if (!userId) {
        return res.status(401).json({
          status: "failure",
          message: "userId param is required!",
        });
      } else {
        const userUpdate = await User.findOneAndUpdate(
          { _id: userId },
          { name, phoneNumber, role, address, avatar },
          { new: true }
        );
        if (userUpdate) {
          return res.status(200).json({
            status: "success",
            message: "User has updated!",
            data: userUpdate,
          });
        } else {
          return res.status(400).json({
            status: "failure",
            message: "user not found",
          });
        }
      }
    } catch (error) {
      next(error);
    }
  }
  async getAllUser(req, res, next) {
    try {
      const users = await User.find({});
      if (users == null) {
        return res.status(400).json({
          status: "failure",
          message: "Nobody here!",
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "All users has found!",
          data: users,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async deleteUser(req, res, next) {
    try {
      const userId = req.params.id;
      const checkUser = await User.findOne({ _id: userId });

      if (!userId) {
        return res.status(400).json({
          status: "failure",
          message: "user di param is required!",
        });
      } else if (checkUser === null) {
        return res.status(400).json({
          status: "failure",
          message: "User not found!",
        });
      } else {
        const deleteUser = await User.findByIdAndDelete(userId);
        if (deleteUser) {
          return res.status(200).json({
            status: "success",
            message: "User deleted!",
          });
        }
      }
    } catch (error) {
      next(error);
    }
  }
  async refreshToken(req, res, next) {
    try {
      const token = req.cookies.refresh_token;
      if (!token) {
        return res.status(200).json({
          status: "failure",
          message: "You are not login yet!",
        });
      } else {
        const response = await refreshTokenService(token);
        if (response.refresh_token) {
          return res
            .status(201)
            .cookie("refresh_token", response.refresh_token, options)
            .json({
              status: "success",
              message: "Refresh token successfully!",
              accessToken: response.access_token,
            });
        } else {
          return res.status(202).json({ response });
        }
      }
    } catch (error) {
      next(error);
    }
  }
}
export default new userController();
