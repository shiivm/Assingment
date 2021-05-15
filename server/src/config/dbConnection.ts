import mongoose from "mongoose";

export const client = () => {
  const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
  const uri = process.env.MONGO_URI || "";
  mongoose
    .connect(uri, dbConfig)
    .then((db) => {
      console.log("Mongo Connected...");
      return db;
    })
    .catch((err) => {
      console.error(`Connecting to Mongo Failed. Error: ${err.message}`);
    });
};