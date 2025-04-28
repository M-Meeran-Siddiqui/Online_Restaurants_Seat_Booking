import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: "./config/.env" });

app.use(
  cors({
    origin: ["http://localhost:5173"], // Allow frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Add any required methods
    credentials: true, // Allow credentials like cookies
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/reservation', reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;

/*
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { dbConnection } from "./database/dbConnection.js";
// import { errorMiddleware } from "./error/error.js";
// import reservationRouter from './routes/reservationRoute.js';

// const app = express();
// dotenv.config({ path: "./config/.env" });

// app.use(
//   cors({
//     origin: "http://localhost:5174", // Ensure the frontend port is correct
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"], // Handle custom headers
//     credentials: true, // Allow credentials like cookies
//   })
// );

// app.options("*", cors());  // Handle preflight request for all routes

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api/v1/reservation', reservationRouter);

// dbConnection();

// app.use(errorMiddleware);

// export default app;
*/