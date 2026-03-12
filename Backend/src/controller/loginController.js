import { userModel } from "../model/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      const isMatch = bcrypt.compare(password, isExist.password);
      if (isMatch) {
        const payload = { email };
        const token = jwt.sign(payload, "jwt_secret", { expiresIn: "24h" });
        res.json({
          success: true,
          code: 200,
          message: "login successfully !",
          data: isExist,
          token,
          error: false,
        });
      } else {
        res.json({
          success: false,
          code: 400,
          message: "Invalid Password,login failed !",
          data: [],
          error: true,
        });
      }
    } else {
      res.json({
        success: false,
        code: 404,
        message: "User Not Found",
        data: [],
        error: true,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      code: 500,
      message: "Internal Server Error",
      data: [],
      error: true,
    });
  }
};
export default loginController;
