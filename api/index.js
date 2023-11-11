/** @format */

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(4000, () => {
  console.log("server listening at port 4000");
});
