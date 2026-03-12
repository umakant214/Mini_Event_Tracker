import jwt from "jsonwebtoken";

const authMeddleware = (req, res, next) => {
  if (!req?.headers?.authorization) {
    return res.json({
      success: false,
      code: 400,
      message: "Required token",
      data: [],
      error: true,
    });
  }

  const rawToken = req.headers.authorization.split(" ");
  const token = rawToken[1];

  jwt.verify(token, "jwt_secret", (err, decode) => {
    if (err) {
      return res.json({
        success: false,
        code: 400,
        message: "Invalid token, Expired token",
        data: [],
        error: true,
      });
    }

    req.user = decode;
    next();
  });
};

export default authMeddleware;
