import express from "express";
const router = express.Router();
import { getUsersForSidebar } from "../controllers/userController.js";
import protectRouter from "../middleware/protecRoute.js";

router.get("/", protectRouter, getUsersForSidebar);

export default router;
