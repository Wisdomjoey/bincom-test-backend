import express from "express";
import { fetchLGAs } from "../controllers/lga";
var lgaRouter = express.Router();
lgaRouter.get("/lgas", fetchLGAs);
export default lgaRouter;
