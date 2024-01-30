import { prisma } from "../config/prismaConfig.js";
const findUserByEmail = async (email) => {
  const user = await prisma.user.findFirst({ where: { email } });
  return user;
};
export default findUserByEmail;
