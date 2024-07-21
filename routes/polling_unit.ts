import express from "express";
import { fetchPollingUnits } from "../controllers/polling_unit.js";

const pollingUnitRouter = express.Router();

pollingUnitRouter.get("/polling-units", fetchPollingUnits);

export default pollingUnitRouter;
