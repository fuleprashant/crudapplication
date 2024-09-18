import express from "express";
import { createUser } from "../controller/user.controller.js";

const routers = express.Router();
routers.post("/create", createUser);
export default routers;
