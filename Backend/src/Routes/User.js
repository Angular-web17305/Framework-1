import express from "express";
import { Login, SignUp } from "../Controllers/User";

const Router = express.Router();
Router.post("/SignUp", SignUp);
Router.post("/Signin", Login);
export default Router;
