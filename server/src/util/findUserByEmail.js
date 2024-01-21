import User from "../models/user.schema.js";
const findUserByEmail = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};
export default findUserByEmail;
