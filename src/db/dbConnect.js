import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
  try {
    const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;

    const databaseConnection = await mongoose.connect(uri);
    console.log(databaseConnection.connection.host);
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
