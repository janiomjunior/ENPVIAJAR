import express from "express";
import { addEmail } from "../controllers/emailController.js";


const router = express.Router();

// POST endpoint to save email subscriptions
router.post("/", addEmail);

export default router;
