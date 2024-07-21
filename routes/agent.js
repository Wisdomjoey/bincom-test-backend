import express from "express";
import { fetchAgents } from "../controllers/agent";
var agentRouter = express.Router();
agentRouter.get("/agents", fetchAgents);
export default agentRouter;
