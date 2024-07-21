import express from "express";
import { fetchLGAs, fetchTotalLGAs } from "../controllers/lga.js";

const lgaRouter = express.Router();

lgaRouter.get("/lgas", fetchLGAs);
lgaRouter.get("/total-lgas", fetchTotalLGAs);

export default lgaRouter;
