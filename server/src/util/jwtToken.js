import jwt from "jsonwebtoken";
const generateAccessToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET_ACCESS_KEY, {
    expiresIn: "5s",
  });
  return token;
};
const generateRefreshToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET_REFRESH_KEY, {
    expiresIn: "1d",
  });
  return token;
};
const refreshTokenService = (token) => {
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET_REFRESH_KEY, (error, user) => {
        if (error) {
          resolve({
            status: "failure",
            message: "Token is expired!",
          });
        } else {
          const { payload } = user;
          const accessToken = generateAccessToken({
            id: payload?.id,
            role: payload?.role,
          });
          const refreshToken = generateRefreshToken({
            id: payload?.id,
            role: payload?.role,
          });
          resolve({
            status: "success",
            message: "token has create!",
            access_token: accessToken,
            refresh_token: refreshToken,
          });
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
export { generateAccessToken, generateRefreshToken, refreshTokenService };
