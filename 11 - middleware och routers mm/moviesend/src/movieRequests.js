import { Router} from "express";
import {body, validationResult} from "express-validator";
import { getMovies, addMovie } from "./handledb.js";

const validations = [
    body('name').exists().isString(),
    body('year').exists().isNumeric(),
    body('director').exists().isString(),
    body('genre').exists().isString(),
]
const movieRouter = Router();

movieRouter.get('/', async (req, res)=>{
    const movies = await getMovies()
    res.json(movies);
})

movieRouter.post('/', validations, async (req, res)=>{
    console.log(req.body);
    const errors = validationResult(req);
    
    if(errors.array().length>0){
        res.status(400).json({message: 'wong format'})
    }
    else{
        await addMovie(req.body);
        res.json(req.body)
    }
})

export {movieRouter}