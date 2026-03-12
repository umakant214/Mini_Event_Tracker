import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import dbConnect from "./dbConfig/db.js";
import router from "./router/router.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
dbConnect();
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
