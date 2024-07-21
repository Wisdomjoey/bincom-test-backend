import express from "express";
import { fetchAgents } from "../controllers/agent";

const agentRouter = express.Router();

agentRouter.get("/agents", fetchAgents);

export default agentRouter;
