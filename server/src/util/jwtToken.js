import jwt from "jsonwebtoken";
const generateAccessToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET_ACCESS_KEY, {
    expiresIn: "3600s",
  });
  return token;
};
const generateRefreshToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET_REFRESH_KEY, {
    expiresIn: "1d",
  });
  return token;
};

export { generateAccessToken, generateRefreshToken };
