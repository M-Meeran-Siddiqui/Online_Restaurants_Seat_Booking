import express from "express";
import { sendReservation, askGemini } from "../controller/reservation.js";

const router = express.Router();

console.log("Setting up the route for /send");

// Route for reservation
router.post("/send", sendReservation);

// Debug-enhanced route for Gemini
router.post("/gemini", (req, res, next) => {
  console.log("🌐 /gemini route HIT");
  next();
}, askGemini);

console.log("Route setup complete");

export default router;
