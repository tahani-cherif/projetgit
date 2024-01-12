import express from "express";
import { body } from "express-validator";

import multer from "../middlewares/multer-config.js";

import { getAll, addOnce } from "../controllers/phdStudent.js";

const router = express.Router();

router
    .route("/")
    .get(getAll)
    .post(
        multer("image", 5 * 1024 * 1024),
        body("fullname").isLength({ min: 5 }),
        body("phone").isLength(8),
        body("phone").isNumeric(),
        addOnce
    );

export default router;
