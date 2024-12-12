import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      logger.info("Connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      logger.error("Error in connecting to database.", err);
    });

    await mongoose.connect(
      config.get("database.url") || "mongodb://localhost:27017/",
    );
  } catch (err) {
    logger.error("Error in connecting to database.", err);
    process.exit(1);
  }
};

export default connectDB;
