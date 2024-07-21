import express from "express";
import { fetchTotalWards, fetchWards } from "../controllers/ward.js";
var wardRouter = express.Router();
wardRouter.get("/wards", fetchWards);
wardRouter.get("/total-wards", fetchTotalWards);
export default wardRouter;
