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

export { createUser };
