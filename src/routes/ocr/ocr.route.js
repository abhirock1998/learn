const { Router } = require("express");

const { processImage } = require("../../controllers/ocr/ocr.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");

const router = Router();

router.post("/upload", uploadMiddleware.single("card"), processImage);

module.exports = router;
