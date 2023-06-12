import express from "express";
import { Signin, SignUp ,getUsers,deleteUser} from "../Controllers/User";

const Router = express.Router();
Router.post("/SignUp", SignUp);
Router.post("/Signin", Signin);
Router.get("/users", getUsers);
Router.delete("/users/:userId",deleteUser)
export default Router;
