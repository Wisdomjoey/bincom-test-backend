import express from "express";
import { fetchParties } from "../controllers/party.js";
var partyRouter = express.Router();
partyRouter.get("/parties", fetchParties);
export default partyRouter;
