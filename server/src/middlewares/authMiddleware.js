import jwt from "jsonwebtoken";
const isAuth = async (req, res, next) => {
  try {
    const { refresh_token } = req.cookies;
    if (!refresh_token) {
      return res.status(403).json({
        status: "failure",
        message: "Login to continue!",
      });
    }

    const decoded = jwt.verify(
      refresh_token,
      process.env.JWT_SECRET_REFRESH_KEY
    );
    if (decoded.payload.role) {
      req.user = decoded.payload;
      next();
    } else {
      return res.status(403).json({
        status: "failure",
        message: "Permission denied!",
      });
    }
  } catch (error) {
    console.log("is auth error: ", error);
  }
};
const isSeller = (req, res, next) => {
  try {
    const { refresh_token } = req.cookies;

    if (!refresh_token) {
      return res.status(403).json({
        status: "failure",
        message: "Login to continue!",
      });
    }

    const decoded = jwt.verify(
      refresh_token,
      process.env.JWT_SECRET_REFRESH_KEY,
      function (err, data) {
        if (err) {
          return res.status(403).json({
            status: "failure",
            message: "Permission denied!",
          });
        }
        if (data.payload.role === "SELLER" || data.payload.role === "ADMIN") {
          req.user = data.payload;
          next();
        } else {
          return res.status(403).json({
            status: "failure",
            message: "Permission denied!",
          });
        }
      }
    );
  } catch (error) {
    console.log("is auth error: ", error);
  }
};
const isAdmin = (req, res, next) => {
  try {
    const { refresh_token } = req.cookies;

    if (!refresh_token) {
      return res.status(403).json({
        status: "failure",
        message: "Login to continue!",
      });
    }

    const decoded = jwt.verify(
      refresh_token,
      process.env.JWT_SECRET_REFRESH_KEY,
      function (err, data) {
        if (err) {
          return res.status(403).json({
            status: "failure",
            message: "Permission denied!",
          });
        }
        if (data.payload.role === "ADMIN") {
          req.user = data.payload;
          next();
        } else {
          return res.status(403).json({
            status: "failure",
            message: "Permission denied!",
          });
        }
      }
    );
  } catch (error) {
    console.log("is auth error: ", error);
  }
};
export { isAdmin, isAuth, isSeller };
