import express from "express";
import { fetchAgents } from "../controllers/agent.js";

const agentRouter = express.Router();

agentRouter.get("/agents", fetchAgents);

export default agentRouter;
