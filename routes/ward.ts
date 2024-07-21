import express from "express";
import { fetchTotalWards, fetchWards } from "../controllers/ward.js";

const wardRouter = express.Router();

wardRouter.get("/wards", fetchWards);
wardRouter.get("/total-wards", fetchTotalWards);

export default wardRouter;
