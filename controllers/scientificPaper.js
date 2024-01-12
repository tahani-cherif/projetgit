import exp from "constants";
import ScientificPaper from "../models/scientificPaper.js";

export function putOnce(req, res) {
    ScientificPaper.findByIdAndUpdate(req.params.id, { status: true });
    ScientificPaper.findById(req.params.id)
        .then(newScPaper => {
            res.status(200).json({ newScPaper });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function addOnce(req, res) {

    var studentId = req.params.idStudent;
    var conferenceId = req.params.idConference;
    ScientificPaper.create({
        phdStudentId: studentId,
        conferenceId: conferenceId,
        status: false
    })
        .then(newScPaper => {
            res.status(200).json({ newScPaper });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function stats(req, res) {

    ScientificPaper.find({ "conferenceId": req.params.idConference })
        .then((newScPaper) => {
            console.log(newScPaper)
            res.status(200).json({
                "panding": newScPaper.filter((result) => !result.status).length,
                "done": newScPaper.filter((result) => result.status).length,
                "Papers": newScPaper
            });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}


