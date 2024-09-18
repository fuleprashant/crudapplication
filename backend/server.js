import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import db from "./util/db.js";

const app = express();
// console.log(app, "The data is fetched");

dotenv.config();

db();

// mongoose
//   .connect(
//     "mongodb+srv://tbsprasanth:TzLFyGcv8OFxTbgZ@cluster0.avqfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("The database is connected"))
//   .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("The database is on the source");
});
app.listen(process.env.PORT, () => {
  console.log(`the server is start on http://localhost:${process.env.PORT}`);
});
