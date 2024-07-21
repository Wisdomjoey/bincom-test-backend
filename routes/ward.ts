import express from "express";
import { fetchWards } from "../controllers/ward.js";

const wardRouter = express.Router();

wardRouter.get("/wards", fetchWards);

export default wardRouter;
