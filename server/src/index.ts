import express from "express";
import * as dotenv from "dotenv";
import cors from 'cors';

import { client } from "./config/dbConnection";
import { errorHandler } from "./middleware/errorHandler";
import { notFoundHandler } from "./middleware/notFoundHandler";
import { userRouter } from "./routes/user";

const app = express();

app.use(express.json());
app.use(cors());
console.log( __dirname+'/../../.env' );
dotenv.config({ path: __dirname+'/../../.env' });

client();

app.use("/user", userRouter);
app.use(errorHandler);
app.use(notFoundHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}`);
});

process.on("uncaughtException", (err: Error) => {
  console.log("Process uncaughtException", err);
});
process.on("unhandledRejection", (reason, p) => {
  console.log("Process unhandledRejection reason", reason);
  console.log("Process unhandledRejection p", p);
});
