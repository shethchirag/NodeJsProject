import dbConnect from "./db/dbConnect.js";
import * as dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
