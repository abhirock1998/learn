const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const MONGO_URI = process.env["MONGO_URI"];
    if (MONGO_URI) {
      await mongoose.connect(MONGO_URI, { dbName: "visitingCards" });
      console.log("Connected to DB:", mongoose.connection.name);
    } else {
      throw new Error("MONGO_URI not found in environment variables");
    }
  } catch (error) {
    console.error("Error connecting to DB: ", error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
