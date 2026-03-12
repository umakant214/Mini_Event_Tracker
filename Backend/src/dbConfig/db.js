import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/Mini_Event_Tracker",
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

export default dbConnect;
