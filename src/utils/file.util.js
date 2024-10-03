const path = require("path");
const fs = require("fs");

const uploadFolder = path.join(__dirname, "..", "uploads");

const getImagePath = (fileName) => `${uploadFolder}/${fileName}`;

const deleteFile = (fileName) => {
  const filePath = getImagePath(fileName);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Deleted file: ${filePath}`);
  });
};

module.exports = {
  uploadFolder,
  getImagePath,
  deleteFile,
};
