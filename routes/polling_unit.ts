import express from "express";
import { fetchLGAPollingUnits, fetchPollingUnits, fetchTotalPollingUnits, fetchWardPollingUnits } from "../controllers/polling_unit.js";

const pollingUnitRouter = express.Router();

pollingUnitRouter.get("/polling-units", fetchPollingUnits);
pollingUnitRouter.get("/total-polling-units", fetchTotalPollingUnits);

pollingUnitRouter.post("/lga-polling-units", fetchLGAPollingUnits);
pollingUnitRouter.post("/ward-polling-units", fetchWardPollingUnits);

export default pollingUnitRouter;
