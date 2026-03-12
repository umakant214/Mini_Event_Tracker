import { eventModel } from "../model/taskModel.js";

const deleteEventController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await eventModel.findByIdAndDelete(id);

    if (!result) {
      return res.json({
        success: false,
        code: 404,
        message: "Event not found",
        data: [],
        error: true,
      });
    }

    res.json({
      success: true,
      code: 200,
      message: "Event deleted successfully!",
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

export default deleteEventController;
