import express from "express";
import { fetchStates } from "../controllers/state";
var stateRouter = express.Router();
stateRouter.get("/states", fetchStates);
export default stateRouter;
