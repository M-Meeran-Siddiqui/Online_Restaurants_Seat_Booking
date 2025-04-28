import express from "express";
import { sendReservation } from "../controller/reservation.js"

const router = express.Router();

console.log("Setting up the route for /send");
router.post("/send", sendReservation);
console.log("Route setup complete");

export default router;