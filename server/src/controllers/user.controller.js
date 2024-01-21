import { v2 as cloudinary } from "cloudinary";
import findUserByEmail from "../util/findUserByEmail.js";
import { sendMail } from "../util/sendMail.js";
import dotenv from "dotenv";
dotenv.config({});
class userController {
  async createUser(req, res, next) {
    try {
      const createActivationToken = (user) => {
        return jwt.sign(user, process.env.ACTIVATION_SECRET, {
          expiresIn: "5m",
        });
      };
      const { name, email, password, avatar } = req.body;
      const existUser = await findUserByEmail(email);
      if (existUser) {
        return res.status(401).json({
          status: "ERROR",
          message: "User already exists",
        });
      }
      const myCloud = await cloudinary.uploader.upload(avatar, {
        folder: "avatars",
      });
      const user = {
        name: name,
        email: email,
        password: password,
        avatar: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
      };
      const activationToken = createActivationToken(user);
      const activationUrl = `${process.env.HOST}/activation/${activationToken}`;

      try {
        await sendMail({
          email,
          subject: "Activate your account",
          activeLink: activationUrl,
        });
        res.status(201).json({
          status: "OK",
          message: `please check your email:- ${user.email} to activate your account!`,
        });
      } catch (error) {
        return next(error);
      }
    } catch (error) {
      return next(error);
    }
  }
}
export default new userController();
