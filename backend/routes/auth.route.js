import express from "express";

//Controllers Import
import {signup, login, logout} from "../controllers/auth.controller.js"

export const authRoute = express.Router();

authRoute.get("/signup", signup);
authRoute.get("/login", login);
authRoute.get("/logout", logout);
