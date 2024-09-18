import mongoose from "mongoose";
import userModel from "../model/user.controller.js";

const createUser = async (req, res) => {
  try {
    const { name, fathername, email, phone } = req.body;

    const newUser = new userModel({ name, fathername, email, phone });
    await newUser.save();

    res
      .status(200)
      .json({ success: false, message: "User created succesfully", newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.find();

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const singleUserData = async (req, res) => {
  try {
    const userId = req.params.id;
    const singleUser = await userModel.findById(userId);

    if (!singleUser) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, singleUser });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateUser = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });

    if (!updateUser) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, updateUser });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export { createUser, getUser, singleUserData, updateUser };
