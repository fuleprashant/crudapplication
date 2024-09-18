import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  singleUserData,
  updateUser,
} from "../controller/user.controller.js";

const routers = express.Router();
routers.post("/create", createUser);
routers.get("/getUser", getUser);
routers.get("/getsingleUser/:id", singleUserData);
routers.put("/updateUser/:id", updateUser);
routers.delete("/deleteUser/:id", deleteUser);

export default routers;
