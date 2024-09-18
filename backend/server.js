import express from "express";
import dotenv from "dotenv";

const app = express();
// console.log(app, "The data is fetched");

dotenv.config();

app.get("/", (req, res) => {
  res.send("The database is on the source");
});
app.listen(process.env.PORT, () => {
  console.log(`the server is start on http://localhost:${process.env.PORT}`);
});
