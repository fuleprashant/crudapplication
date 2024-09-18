import express from "express";
import { createUser, getUser } from "../controller/user.controller.js";

const routers = express.Router();
routers.post("/create", createUser);
routers.get("/getUser", getUser);
export default routers;
