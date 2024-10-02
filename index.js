import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log("server started at " + PORT);
  });
});
