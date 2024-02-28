import { Router} from "express";
import {body, validationResult} from "express-validator"
import { getActors, addActor } from "./handledb.js";

const validations = [
    body('name').exists().isString(),
    body('age').exists().isNumeric()
]
const actorRouter = Router();

actorRouter.get('/', async (req, res)=>{

    const actors = await getActors()
    res.json(actors);
})


actorRouter.post('/', validations, async (req, res)=>{
    // console.log(req.body);
    const errors = validationResult(req);
    console.log(errors.array());

    if(errors.array().length > 0){
        res.status(400).json({message: 'wrong format'});
    }
    else{
        await addActor(req.body);
        res.json(req.body)
    }
})

export {actorRouter}