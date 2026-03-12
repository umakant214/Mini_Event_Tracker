import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  Title: String,
  dateTime: Date,
  Location: String,
  OptionDes: String,
});

export const eventModel = mongoose.model("events", eventSchema);
