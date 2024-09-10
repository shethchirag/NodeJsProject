import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dbConnect from "./db/dbConnect.js";
import * as dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

dbConnect()
  .then(() => {
    app.on("error", (err) => {
      console.log(err);
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
// const app = express();

// (async function () {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log(err);
//       throw err;
//     });
//     app.listen(`${process.env.PORT}`, () => {
//       console.log(`app is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })();
