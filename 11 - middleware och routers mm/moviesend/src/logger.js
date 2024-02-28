import fs from 'fs/promises';

export default async function logRequest(req, res, next){
    const timeStamp = new Date().toString().substring(0, 25);
    const requestString = `${timeStamp} ${req.path} ${req.method} \n`
    console.log(requestString);
   
    await fs.appendFile('./src/logg.txt', requestString);
    next();
}

