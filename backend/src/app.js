// --------------------------- IMPORTS ---------------------------
import express from "express";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app } from "./lib/socket.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// --------------------------- HELPERS FOR __dirname ---------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// --------------------------- MIDDLEWARES ---------------------------
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// --------------------------- ROUTES ---------------------------
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);

// --------------------------- STATIC FILES FOR DEPLOYMENT ---------------------------
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

// --------------------------- EXPORT ---------------------------
export default app;
