import Menu from "../models/menu.js";
import { validationResult } from "express-validator";

export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json(validationResult(req).array());
  } else {
    Menu.create(req.body)
      .then((menu) => {
        res.status(201).json(menu);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getAll(req, res) {
  Menu.find({})
    .select("nom")
    .then((menu) => {
      res.status(200).json(menu);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
export function getOnce(req, res) {
  Menu.findById(req.params.id)
    .then((menu) => {
      res.status(200).json(menu);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
