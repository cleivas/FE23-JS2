import express from "express";
import cors from "cors"
import logRequest from "./logger.js";
import { movieRouter } from "./movieRequests.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequest)

// Routa
app.use('/movies', movieRouter)

export {app};