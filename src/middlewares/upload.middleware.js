const multer = require("multer");
const { uploadFolder } = require("../utils/file.util");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(`File is:`, file);
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    req.fileName = fileName;
    cb(null, fileName);
  },
});

module.exports = multer({ storage });
