import { Router} from "express";
import { getMovies, addMovie } from "./handledb.js";

const movieRouter = Router();

movieRouter.get('/', async (req, res)=>{
    const movies = await getMovies()
    res.json(movies);
})

movieRouter.post('/', async (req, res)=>{
    console.log(req.body);
    await addMovie(req.body);
    res.json(req.body)
})

export {movieRouter}