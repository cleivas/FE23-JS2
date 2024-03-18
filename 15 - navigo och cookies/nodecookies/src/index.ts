import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CookieOptions } from "express"; //Typescript typen för settings-objektet


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

// När en get request kommer in till den här routen skickas ett response med en set-cookie header
app.get('/set-cookie', (req, res)=>{
    const settings: CookieOptions = {
        path: '/',
        httpOnly: false,
        maxAge: 1000*60, //kommer vara giltig i en minut
        sameSite: 'none'
    };

    res.cookie('fruit', 'banana', settings); 

    res.set('Access-Control-Allow-Origin', req.headers.origin);
    res.set('Access-Control-Allow-Credentials', 'true');

    res.json({message: 'cookie is set'});
})

// När en get request kommer in till den här routen skickas ett response med en set-cookie header
app.get('/read-cookie', (req, res)=>{
    res.set('Access-Control-Allow-Origin', req.headers.origin);
    res.set('Access-Control-Allow-Credentials', 'true');

    if(req.cookies.fruit){
        console.log(req.cookies);
        res.json({message: 'Fruit cookie read'});
    }
    else{
        res.json({message: 'Fruit cookie is either expired or does not exist'});
    }
   
})


app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})
