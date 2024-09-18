import express from "express";
import {
  createUser,
  getUser,
  singleUserData,
} from "../controller/user.controller.js";

const routers = express.Router();
routers.post("/create", createUser);
routers.get("/getUser", getUser);
routers.get("/getsingleUser/:id", singleUserData);
export default routers;
