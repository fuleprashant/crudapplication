import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("The database is connected to the server");
  } catch (error) {
    console.log(error);
  }
};

export default db;
