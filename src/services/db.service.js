const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    // const MONGO_URI = process.env["MONGO_URI"];
    const MONGO_URI =
      "mongodb+srv://j90811981:PqesdcabZAaaxTLE@cluster0.pen5mz8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    if (MONGO_URI)
      await mongoose.connect(MONGO_URI, { dbName: "visitingCards" });
    if (MONGO_URI) console.log("Connected to DB:", mongoose.connection.name);
  } catch (error) {
    console.error("Error connecting to DB: ", error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
