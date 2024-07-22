import express from "express";
import { fetchLGAResults, fetchPUResult, fetchPUResults, fetchTotalPUResults } from "../controllers/result.js";
var resultRouter = express.Router();
resultRouter.get("/announced-lga-results", fetchLGAResults);
resultRouter.get("/announced-pu-results", fetchPUResults);
resultRouter.get("/total-pu-results", fetchTotalPUResults);
resultRouter.post("/pu-result", fetchPUResult);
export default resultRouter;
