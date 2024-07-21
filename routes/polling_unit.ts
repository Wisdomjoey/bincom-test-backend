import express from "express";
import { fetchLGAPollingUnits, fetchPollingUnits, fetchTotalPollingUnits } from "../controllers/polling_unit.js";

const pollingUnitRouter = express.Router();

pollingUnitRouter.get("/polling-units", fetchPollingUnits);
pollingUnitRouter.get("/total-polling-units", fetchTotalPollingUnits);

pollingUnitRouter.post("/polling-unit", fetchLGAPollingUnits);

export default pollingUnitRouter;
