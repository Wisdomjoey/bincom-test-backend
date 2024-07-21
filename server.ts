import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./config/db_config.js";
import stateRouter from "./routes/state.js";
import partyRouter from "./routes/party.js";
import agentRouter from "./routes/agent.js";
import wardRouter from "./routes/ward.js";
import pollingUnitRouter from "./routes/polling_unit.js";
import lgaRouter from "./routes/lga.js";
import resultRouter from "./routes/result.js";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors({}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/", agentRouter);
app.use("/api/", lgaRouter);
app.use("/api/", partyRouter);
app.use("/api/", pollingUnitRouter);
app.use("/api/", resultRouter);
app.use("/api/", stateRouter);
app.use("/api/", wardRouter);

app.get("/", (_, res) => res.status(200).send("Server running"));

db.$connect();

server.listen("8080", () => console.log("Connected to port 8080"));
