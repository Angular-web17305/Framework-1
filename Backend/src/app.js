import express from "express";
import authRouter from "./Routes/User";
import productRouter from './Routes/product'
import categoryRouter from './Routes/category'
import mongoose from "mongoose";
import cors from "cors"
const app = express();
//middleware
app.use(express.json());
app.use(cors())

//router
app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);

// server

mongoose.connect('mongodb://127.0.0.1:27017/nodejs');


export const viteNodeApp = app;
// 'mongodb://127.0.0.1:27017/ASM1-WE17307'
