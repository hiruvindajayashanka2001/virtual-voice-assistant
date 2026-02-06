import express from "express";
import {textToSpeech} from "../../services/elevenLabs.service.js";

const router = express.Router();

router.post("/talk", async (req, res) => {
    const {text} = req.body;

    const reply =  `You said: ${text}`;

    const audio = await textToSpeech(reply);

    res.set({
        "Content-Type":"audio/mpeg",
        "Content-Disposition":"inline",
    });

    res.send(audio);
});

export default router;