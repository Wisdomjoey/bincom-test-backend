import express from "express";
import { fetchWards } from "../controllers/ward.js";
var wardRouter = express.Router();
wardRouter.get("/wards", fetchWards);
export default wardRouter;
