import express from "express";
import { fetchLGAWards, fetchTotalWards, fetchWards } from "../controllers/ward.js";

const wardRouter = express.Router();

wardRouter.get("/wards", fetchWards);
wardRouter.get("/total-wards", fetchTotalWards);

wardRouter.post("/lga-wards", fetchLGAWards);

export default wardRouter;
