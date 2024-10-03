// import { Router } from "express";
// import userRouter from "@routes/auth/auth.routes";
// cons imageRouter from "@routes/image/image.routes";

const { Router } = require("express");
const ocrRouter = require("./ocr/ocr.route");
const userRouter = require("./users/user.route");

const router = Router();

router.use("/ocr", ocrRouter);
router.use("/users", userRouter);

module.exports = router;
