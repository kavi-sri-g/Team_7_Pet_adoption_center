import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import pet_r from "./routes/petRoutes.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use("/pet_r", pet_r);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log("server started at " + PORT);
  });
});
