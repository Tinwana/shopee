// import { v2 as cloudinary } from "cloudinary";
import findUserByEmail from "../util/findUserByEmail.js";
import { sendMail } from "../util/sendMail.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import {
  generateAccessToken,
  generateRefreshToken,
  refreshTokenService,
} from "../util/jwtToken.js";
import { options } from "../util/cookiesOptions.js";
import { prisma } from "../config/prismaConfig.js";

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
        const exitsAccount = await prisma.account.findFirst({
          where: {
            AND: {
              userId: existUser.id,
              provider: { name: "credential" },
            },
          },
        });
        if (exitsAccount) {
          return res.status(401).json({
            status: "failure",
            message: "Account already exists",
          });
        }
      }
      // const myCloud = await cloudinary.uploader.upload(avatar, {
      //   folder: "avatars",
      // });
      const user = {
        email: email,
      };
      const activationToken = createActivationToken(user);
      const exitsEmailToken = await prisma.activationToken.findFirst({
        where: { email: email },
      });
      if (exitsEmailToken)
        await prisma.activationToken.delete({
          where: { email: exitsEmailToken.email },
        });
      await prisma.activationToken.create({
        data: {
          token: activationToken,
          email: email,
        },
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
      const activationToken = req.query.activation_token;
      console.log(name, password, phoneNumber, activationToken);
      if (!activationToken) {
        return res.status(403).json({
          status: "failure",
          message: "Activation token is required!",
        });
      } else {
        const userEmail = jwt.verify(
          activationToken,
          process.env.ACTIVATION_SECRET,
          async function (err, payload) {
            if (err) {
              return res.status(400).json({
                status: "failure",
                message: "You are late, please register again!",
              });
            }
            const exitsUser = await prisma.user.findFirst({
              where: { email: payload?.email },
            });
            if (!exitsUser) {
              const hashPassword = await argon2.hash(password);

              const createAccount = await prisma.account.create({
                data: {
                  userName: name,
                  password: hashPassword,
                  verify: true,
                  user: {
                    create: {
                      email: payload?.email,
                    },
                  },
                  provider: {
                    connect: {
                      name: "credential",
                    },
                  },
                  type: {
                    connect: {
                      type: "email",
                    },
                  },
                },
              });
              await prisma.accountPhoneNumber.create({
                data: {
                  phoneNumber,
                  accountId: createAccount.id,
                },
              });
              if (createAccount) {
                return res.status(200).json({
                  status: "success",
                  message: "User created successfully!",
                  data: createAccount,
                });
              }
            } else {
              const hashPassword = await argon2.hash(password);

              const createAccount = await prisma.account.create({
                data: {
                  userName: name,
                  password: hashPassword,
                  verify: true,
                  user: {
                    connect: {
                      email: payload?.email,
                    },
                  },
                  provider: {
                    connect: {
                      name: "credential",
                    },
                  },
                  type: {
                    connect: {
                      type: "email",
                    },
                  },
                },
              });
              await prisma.accountPhoneNumber.create({
                data: {
                  phoneNumber,
                  accountId: createAccount.id,
                },
              });
              if (createAccount) {
                return res.status(200).json({
                  status: "success",
                  message: "User created successfully!",
                  data: createAccount,
                });
              }
            }
          }
        );
      }
    } catch (error) {
      next(error);
    }
  }
  async loginUser(req, res, next) {
    try {
      const {
        email,
        password,
        name,
        provider = "credential",
        verifyEmail,
        phoneNumber,
        avatar,
      } = req.body;
      if (provider !== "credential") {
        const checkExitsUser = await prisma.user.findFirst({
          where: { email },
        });
        if (!checkExitsUser) {
          const createAccount = await prisma.account.create({
            data: {
              userName: name,
              avatar,
              verify: verifyEmail,
              user: {
                create: {
                  email,
                },
              },
              provider: {
                connect: {
                  name: provider,
                },
              },
              type: {
                connect: {
                  type: "social",
                },
              },
            },
          });
          await prisma.accountPhoneNumber.create({
            data: {
              phoneNumber,
              accountId: createAccount.id,
            },
          });
          if (createAccount) {
            const accessToken = generateAccessToken({
              id: createAccount.id,
              userId: createAccount.userId,
              role: createAccount.role,
            });
            const refreshToken = generateRefreshToken({
              id: createAccount.id,
              userId: createAccount.userId,
              role: createAccount.role,
            });
            const userAccountToken = await prisma.account.update({
              where: {
                id: createAccount.id,
              },
              data: {
                accessToken: accessToken,
                refreshToken: refreshToken,
              },
            });
            return res
              .status(200)
              .cookie("refresh_token", refreshToken, options)
              .json({
                status: "success",
                message: "sign in success!",
                accessToken,
              });
          }
        } else {
          const checkExitsAccount = await prisma.account.findFirst({
            where: {
              AND: {
                userId: checkExitsUser.id,
                provider: {
                  name: provider,
                },
              },
            },
          });
          if (!checkExitsAccount) {
            return res.status(403).json({
              status: "failure",
              message: "account not found!!",
            });
          } else {
            const accessToken = generateAccessToken({
              id: checkExitsAccount.id,
              userId: checkExitsAccount.userId,
              role: checkExitsAccount.role,
            });
            const refreshToken = generateRefreshToken({
              id: checkExitsAccount.id,
              userId: checkExitsAccount.userId,
              role: checkExitsAccount.role,
            });
            const userAccountToken = await prisma.account.update({
              where: {
                id: checkExitsAccount.id,
              },
              data: {
                accessToken,
                refreshToken,
              },
            });
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
      } else {
        const checkUser = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (!email) {
          return res.status(401).json({
            status: "failure",
            message: "The email is required",
          });
        } else if (!checkUser) {
          return res.status(401).json({
            status: "failure",
            message: "User is not found!",
          });
        } else {
          const userAccountPassword = await prisma.account.findFirst({
            where: {
              AND: {
                userId: checkUser.id,
                provider: {
                  name: "credential",
                },
              },
            },
            select: {
              password: true,
            },
          });
          if (!userAccountPassword) {
            return res.status(401).json({
              status: "failure",
              message: "Account dose not exits!",
            });
          }
          const comparePassword = await argon2.verify(
            userAccountPassword.password,
            password
          );
          if (!comparePassword) {
            return res.status(400).json({
              status: "failure",
              message: "Password is incorrect!",
            });
          } else {
            const userAccount = await prisma.account.findFirst({
              where: {
                AND: {
                  userId: checkUser.id,
                  provider: {
                    name: "credential",
                  },
                },
              },
            });
            const accessToken = generateAccessToken({
              id: userAccount.id,
              userId: userAccount.userId,
              role: userAccount.role,
            });
            const refreshToken = generateRefreshToken({
              id: userAccount.id,
              userId: userAccount.userId,
              role: userAccount.role,
            });
            const userAccountToken = await prisma.account.update({
              where: {
                id: userAccount.id,
              },
              data: {
                accessToken,
                refreshToken,
              },
            });

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
      }
    } catch (error) {
      next(error);
    }
  }
  async getDetailUser(req, res, next) {
    try {
      const userId = req.params.id;
      if (userId !== req.user?.userId) {
        return res.status(400).json({
          status: "failure!",
          message: "Permission denied!!",
        });
      }
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      if (!userId) {
        return res.status(400).json({
          status: "failure!",
          message: "User di param is required!",
        });
      } else if (!user) {
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
      const accountId = req.params.id;
      const currentAccount = await prisma.account.findUnique({
        where: { id: accountId },
        include: {
          type: true,
        },
      });
      const {
        name,
        phoneNumber,
        addresses,
        avatar,
        role,
        password,
        sex,
        birth,
      } = req.body;
      if (!accountId) {
        return res.status(401).json({
          status: "failure",
          message: "accountId param is required!",
        });
      } else {
        if (currentAccount.type.type !== "social") {
          const hash = argon2.hash(password);
          const accountUpdate = await prisma.account.update({
            where: { id: accountId },
            data: {
              userName: name,
              role,
              avatar,
              password: hash,
            },
          });
          const updatePhoneNumber = await prisma.accountPhoneNumber.create({
            data: {
              accountId,
              phoneNumber,
            },
          });
          const userUpdate = await prisma.user.update({
            where: { id: accountUpdate.userId },
            data: {
              address: addresses,
              sex,
              birth,
            },
          });
          if (userUpdate) {
            const data = {
              name: accountUpdate?.userName,
              birth: userUpdate.birth,
              sex: userUpdate.sex,
              userId: accountUpdate?.userId,
              accountId: accountUpdate?.id,
              email: userUpdate?.email,
              phoneNumber: updatePhoneNumber?.phoneNumber,
              role: accountUpdate?.role,
              avatar: accountUpdate?.avatar,
            };
            return res.status(200).json({
              status: "success",
              message: "User has updated!",
              data: data,
            });
          } else {
            return res.status(400).json({
              status: "failure",
              message: "user not found",
            });
          }
        } else {
          return res.status(404).json({
            status: "failure",
            message: "You can not change info on this account!!",
          });
        }
      }
    } catch (error) {
      next(error);
    }
  }
  async getAllUser(req, res, next) {
    try {
      const users = await prisma.user.findMany();
      if (!users) {
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
      const accountId = req.params.id;
      const checkAccount = await prisma.account.findFirst({
        where: { id: accountId },
      });

      if (!accountId) {
        return res.status(400).json({
          status: "failure",
          message: "user di param is required!",
        });
      } else if (!checkAccount) {
        return res.status(400).json({
          status: "failure",
          message: "Account not found!",
        });
      } else {
        const deleteAccount = await prisma.account.deleteMany({
          where: { id: checkAccount.id },
        });
        const deleteUser = await prisma.user.delete({
          where: { id: checkAccount.userId },
        });
        if (deleteUser && deleteAccount) {
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
      console.log(token);
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
          return res.status(404).json({ response });
        }
      }
    } catch (error) {
      next(error);
    }
  }
  logOutUser(req, res, next) {
    // if (req.headers && req.headers.token) {
    //   const token = req.headers.token.split(" ")[1];
    //   if (!token) {
    //     return res.status(401).json({
    //       status: "error",
    //       message: "authentication fail!",
    //     });
    //   }
    //   const tokens = req.user.tokens;
    //   const newTokens = tokens.filter((t) => t?.token !== token);
    try {
      // User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
      res.clearCookie("refresh_token");
      return res.status(200).json({
        status: "OK",
        message: "logout successfully!",
      });
    } catch (e) {
      next(e);
    }
  }
  async getDetailAccount(req, res, next) {
    try {
      const accountId = req.params.id;

      // if (accountId !== req.user?.id) {
      //   return res.status(400).json({
      //     status: "failure!",
      //     message: "Permission denied!!",
      //   });
      // }
      const account = await prisma.account.findUnique({
        where: { id: accountId },
        include: { AccountPhoneNumber: true },
      });
      if (!accountId) {
        return res.status(400).json({
          status: "failure!",
          message: "User di param is required!",
        });
      }
      if (!account) {
        return res.status(400).json({
          status: "failure",
          message: "Account not found!",
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "Get account successfully!",
          data: account,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async getAllAccount(req, res, next) {
    try {
      console.log("hello");
      const accounts = await prisma.account.findMany();
      if (!accounts) {
        return res.status(400).json({
          status: "failure",
          message: "Nobody here!",
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "All accounts has found!",
          data: accounts,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}
export default new userController();
