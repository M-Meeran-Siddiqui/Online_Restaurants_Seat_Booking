import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";
import fetch from "node-fetch"; // Required for Gemini API

// Existing reservation controller
export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone, seats } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone || !seats) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone, seats });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(error);
  }
};

// Gemini chatbot controller
export const askGemini = async (req, res) => {
  const { input } = req.body;

  if (!input) return res.status(400).json({ error: "No input provided" });

  console.log("Gemini Key Loaded:", process.env.GEMINI_API_KEY ? "Yes ✅" : "No ❌");

  try {
    const geminiRes = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-001:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user", // ✅ REQUIRED: Gemini needs role
              parts: [{ text: input }],
            },
          ],
        }),
      }
    );

    const data = await geminiRes.json();

    // Optional: Debug log
    console.log("Gemini API response:", JSON.stringify(data, null, 2));

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Gemini API Error", details: error.message });
  }
};


