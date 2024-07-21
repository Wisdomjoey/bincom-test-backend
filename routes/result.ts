import express from "express";
import { fetchLGAResults, fetchPUResults, fetchTotalPUResults } from "../controllers/result.js";

const resultRouter = express.Router();

resultRouter.get("/announced-lga-results", fetchLGAResults);
resultRouter.get("/announced-pu-results", fetchPUResults);
resultRouter.get("/total-pu-results", fetchTotalPUResults);

export default resultRouter;
