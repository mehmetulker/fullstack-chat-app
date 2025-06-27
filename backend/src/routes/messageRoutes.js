import express from "express";
import { sendMessage, getMessage } from "../controllers/messageControler.js";

const router = express.Router();

// Route to send a new message
router.get("/:id", getMessage);
router.post("/send/:id", sendMessage);

export default router;
