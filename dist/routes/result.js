import express from "express";
import { fetchLGAResults, fetchPUResults } from "../controllers/result.js";
var resultRouter = express.Router();
resultRouter.get("/announced-lga-results", fetchLGAResults);
resultRouter.get("/announced-pu-results", fetchPUResults);
export default resultRouter;
