import express from "express";
import { fetchParties } from "../controllers/party";
var partyRouter = express.Router();
partyRouter.get("/parties", fetchParties);
export default partyRouter;
