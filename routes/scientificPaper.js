import express from "express";
import { addOnce, putOnce, stats } from "../controllers/scientificPaper.js";

const router = express.Router();

router
    .route("/:id")
    .patch(putOnce);

router.route("/:idStudent/:idConference")
    .post(addOnce);
router.route("/conferences/:idConference")
    .get(stats);

export default router;
