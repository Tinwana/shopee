import jwt from "jsonwebtoken";
import { prisma } from "../config/prismaConfig.js";

class shopController {
  async verifyShop(req, res, next) {
    try {
      const { name, address, phoneNumber, accountId, description } = req.body;
      const createShop = await prisma.shop.create({
        data: {
          name,
          description,
          address: {
            create: {
              country: {
                create: {
                  name: address.country,
                },
              },
              city: address.city,
              postalCode: address.postalCode,
              addressLine1: address.addressLine,
            },
          },
          ShopPhoneNumber: {
            create: {
              phoneNumber,
            },
          },
          account: {
            connect: {
              id: accountId,
            },
          },
        },
      });
      if (createShop) {
        return res.status(200).json({
          status: "success",
          message: "Wait for checking your shop!",
          data: createShop,
        });
      } else {
        return res.status(404).json({
          status: "failure",
          message: "Something went wrong",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async activeShop(req, res, next) {
    try {
      const { shopId } = req.body;
      const activeShop = await prisma.shop.update({
        where: {
          id: shopId,
        },
        data: {
          active: true,
        },
      });
      const changeRoleAccount = await prisma.account.update({
        where: {
          id: activeShop.accountId,
        },
        data: {
          role: "SELLER",
        },
      });
      if (activeShop) {
        return res.status(200).json({
          status: "success",
          message: "Active successfully!!",
        });
      } else {
        return res.status(404).json({
          status: "failure",
          message: "Something went wrong",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async getDetailShop(req, res, next) {
    try {
      const shopId = req.params.id;
      const yourShop = await prisma.shop.findUnique({
        where: {
          id: shopId,
        },
        include: {
          address: true,
          ShopPhoneNumber: true,
          Transection: true,
        },
      });
      if (yourShop) {
        if (yourShop.accountId !== req?.user?.id) {
          return res.status(400).json({
            status: "failure!",
            message: "Permission denied!!",
          });
        } else {
          return res.status(200).json({
            status: "success",
            message: "Your shop was found!!",
            data: yourShop,
          });
        }
      } else {
        return res.status(404).json({
          status: "failure",
          message: "Not found your shop!!",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async updateShop(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default new shopController();
