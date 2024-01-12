import express from "express";
import { body } from "express-validator";


import { getAll, addOnce } from "../controllers/conferences.js";

const router = express.Router();

router
    .route("/")
    .get(getAll)
    .post(
        body("name").isLength({ min: 5 }),
        body("description").isLength({ min: 20, max: 1000 }),
        body("nbrPaperMax").isNumeric(),
        addOnce
    );

export default router;
