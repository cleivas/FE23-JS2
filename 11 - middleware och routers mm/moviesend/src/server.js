import express from "express";
import cors from "cors"
import logRequest from "./logger.js";
import { movieRouter } from "./movieRequests.js";
import { actorRouter } from "./actorRequests.js";


const app = express();

app.use(cors()); //Tillåt cross-origin requests
app.use(express.json()); 
app.use(logRequest)

app.use('/movies', movieRouter)
app.use('/actors', actorRouter)

export {app};