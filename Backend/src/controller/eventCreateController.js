import { eventModel } from "../model/taskModel.js";
const eventCreateController = async (req, res) => {
  try {
    const { Title, dateTime, Location, OptionDes } = req.body;

    const isExist = await eventModel.findOne({ Title });

    if (isExist) {
      return res.json({
        success: false,
        code: 400,
        message: "Event already Exist",
        data: [],
        error: true,
      });
    }
    const data = new eventModel({
      Title,
      dateTime,
      Location,
      OptionDes,
    });
    const result = await data.save();
    res.json({
      success: true,
      code: 200,
      message: "Event created successfully!",
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

export default eventCreateController;
