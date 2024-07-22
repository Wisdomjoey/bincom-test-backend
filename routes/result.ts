import express from "express";
import {
  fetchLGAResults,
  fetchPUResult,
  fetchPUResults,
  fetchTotalPUResults,
  uploadPUResult,
} from "../controllers/result.js";

const resultRouter = express.Router();

resultRouter.get("/announced-lga-results", fetchLGAResults);
resultRouter.get("/announced-pu-results", fetchPUResults);
resultRouter.get("/total-pu-results", fetchTotalPUResults);

resultRouter.post("/pu-result", fetchPUResult);
resultRouter.post("/upload-result", uploadPUResult);

export default resultRouter;
