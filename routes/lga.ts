import express from "express";
import { fetchLGAs } from "../controllers/lga";

const lgaRouter = express.Router();

lgaRouter.get("/lgas", fetchLGAs);

export default lgaRouter;
