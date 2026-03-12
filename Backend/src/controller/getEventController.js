import { eventModel } from "../model/taskModel.js";
const getEventController = async (req, res) => {
  try {
    const result = await eventModel.find();
    res.json({
      success: true,
      code: 200,
      message: "Event list fetched successfully!",
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
export default getEventController;
