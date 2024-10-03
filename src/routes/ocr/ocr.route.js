const { processImage } = require("../../controllers/ocr/ocr.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");
const { Router } = require("express");
// import { upload } from "@middlewares/upload.middleware";
// import { Router } from "express";

const router = Router();

router.post("/upload", uploadMiddleware.single("card"), processImage);

export default router;
