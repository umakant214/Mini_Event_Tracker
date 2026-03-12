import { userModel } from "../model/model.js";
import bcrypt from "bcrypt";

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isExist = await userModel.findOne({ email });

    if (isExist) {
      return res.json({
        success: false,
        code: 400,
        message: "User already Exist",
        data: [],
        error: true,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const data = new userModel({
      name,
      email,
      password: hashPassword,
    });

    const result = await data.save();

    res.json({
      success: true,
      code: 200,
      message: "User Register successfully!",
      data: result,
      error: false,
    });
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

export default registerController;
