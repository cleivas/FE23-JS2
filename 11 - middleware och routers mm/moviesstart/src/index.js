import express from "express";
import cors from "cors"
import { addMovie, getMovies } from "./handledb.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/movies', async (req, res)=>{
    const movies = await getMovies()
    res.json(movies);
})

app.post('/movies', async (req, res)=>{
    console.log(req.body);
    await addMovie(req.body);
    res.json(req.body)
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})