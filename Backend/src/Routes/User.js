import express from "express";
import { Signin, SignUp } from "../Controllers/User";

const Router = express.Router();
Router.post("/SignUp", SignUp);
Router.post("/Signin", Signin);
export default Router;
