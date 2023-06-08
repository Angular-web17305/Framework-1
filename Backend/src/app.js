import express from "express";
import authRouter from "./Routes/User";
import mongoose from "mongoose";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api", authRouter);
mongoose.connect('mongodb://127.0.0.1:27017/nodejs');
export const viteNodeApp = app;

