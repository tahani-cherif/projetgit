import { validationResult } from "express-validator";

import PhdStudent from "../models/phdStudent.js";

export function getAll(req, res) {
    PhdStudent.find({})
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

export function addOnce(req, res) {
    if (!validationResult(req).isEmpty()) {
        res.status(400).json({ errors: validationResult(req).array() });
    } else {
        PhdStudent.create({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            image: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
        })
            .then((newPhd) => {
                res.status(201).json({
                    "_id": newPhd._id
                });
            })
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    }
}

