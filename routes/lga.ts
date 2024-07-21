import express from "express";
import { fetchLGAs } from "../controllers/lga.js";

const lgaRouter = express.Router();

lgaRouter.get("/lgas", fetchLGAs);

export default lgaRouter;
