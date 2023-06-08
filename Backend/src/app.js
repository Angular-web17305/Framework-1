import express from "express";
import authRouter from "./Routes/User";
import productRouter from './Routes/product'
import categoryRouter from './Routes/category'
import mongoose from "mongoose";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
mongoose.connect('mongodb://127.0.0.1:27017/nodejs');
export const viteNodeApp = app;

