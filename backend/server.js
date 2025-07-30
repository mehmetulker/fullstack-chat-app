import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/authRoutes.js";
import messageRoutes from "./src/routes/messageRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";

import connectDB from "./src/lib/db.js";
import protectRoute from "./src/middleware/protecRoute.js";
dotenv.config();
const app = express();
app.use(express.json()); //
app.use(cookieParser());

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/messages", protectRoute, messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
  connectDB();
});
