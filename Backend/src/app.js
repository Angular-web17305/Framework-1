import express from "express";
import authRouter from "./Routes/User";
import productRouter from './Routes/product'
import categoryRouter from './Routes/category'
import cartRouter from './Routes/cart'
import mongoose from "mongoose";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", cartRouter);
mongoose.connect('mongodb://127.0.0.1:27017/nodejs')
    .then(() => console.log("db connected")).catch(error => console.log(error))
export const viteNodeApp = app;

