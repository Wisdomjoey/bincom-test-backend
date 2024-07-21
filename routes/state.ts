import express from "express";
import { fetchStates } from "../controllers/state.js";

const stateRouter = express.Router();

stateRouter.get("/states", fetchStates);

export default stateRouter;
