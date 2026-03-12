import { eventModel } from "../model/taskModel.js";

const updateEventController = async (req, res) => {
  try {
    const { Title, dateTime, Location, OptionDes } = req.body;
    const { id } = req.params;
    const data = await eventModel.updateOne(
      { _id: id },
      { $set: { Title, dateTime, Location, OptionDes } },
    );
    res.json({
      success: true,
      code: 200,
      message: "Updated Data",
      data: data,
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

export default updateEventController;
