import { validationResult } from "express-validator";

import Conference from "../models/conference.js";

export function getAll(req, res) {
    Conference.find({})
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
        Conference.create(req.body)
            .then((newconf) => {
                res.status(201).json({
                    "_id": newconf._id
                });
            })
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    }
}

