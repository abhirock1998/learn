require("dotenv").config();

const path = require("path");
const cors = require("cors");
const express = require("express");
const router = require("./routes");
const connectToDB = require("./services/db.service");
const errorMiddleware = require("./middlewares/error.middleware");

// ANSI escape codes for colors
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
};

// Emoji text
const emojis = {
  folder: "📁",
  check: "✅",
  wrench: "🛠️",
  tada: "🎉",
  cross: "❌",
  globe: "🌐",
  clock: "🕒",
};

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const buildFolder = path.join(__dirname, "..", "client", "dist");

// Registering Index router
app.use("/api/v1/", router);

// Serve app production bundle
app.use(express.static(buildFolder));

console.log(`The Build folder is: ${buildFolder}`);

app.get("*", function (req, res) {
  console.log(
    `${colors.green}${emojis.check} Serving index.html${colors.reset}`
  );
  res.sendFile(path.join(buildFolder, "index.html"));
});

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env["PORT"] || 3000;

console.log(`---------------------------------`);

console.log(process.env);

console.log(`---------------------------------`);

// Build client app and start server
app.listen(PORT, async () => {
  await connectToDB();
  console.log(
    `${colors.green}${emojis.tada} Server is running on port ${PORT}${colors.reset}`
  );
});
