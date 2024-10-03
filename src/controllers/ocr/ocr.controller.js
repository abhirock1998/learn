const asyncHandler = require("../../middlewares/async.middleware");

const {
  deleteFile,
  getImagePath,
  uploadFolder,
} = require("../../utils/file.util");
const _response = require("../../utils/response.util");
const fs = require("fs");
const { createWorker } = require("tesseract.js");
const { extractFields } = require("../../utils/ocr.util");

const processImage = asyncHandler(async (req, res, next) => {
  const { fileName } = req;

  console.log("Files in uploads folder:", fs.readdirSync(uploadFolder));

  if (!fileName) {
    return _response(res, "File not found", false, 404, {});
  }

  const filepath = getImagePath(fileName);
  console.log("File to be processed:", filepath);
  const worker = await createWorker();

  await worker.loadLanguage("eng");
  await worker.initialize("eng");

  const {
    data: { text },
  } = await worker.recognize(filepath);

  await worker.terminate();

  deleteFile(fileName);

  const result = extractFields(text);
  //   console.log(lines);

  return _response(res, "Image processed successfully", true, 200, result);
});

module.exports = { processImage };
