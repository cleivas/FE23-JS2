import fs from 'fs/promises';

async function readDB(){
    const raw = await fs.readFile('./src/moviedb.json');
    const db = JSON.parse(raw);
    return db;
}

async function writeDB(db){
    const newDB = JSON.stringify(db, null, 2);
    await fs.writeFile('./src/moviedb.json', newDB)
}

async function getMovies(db){
    let dataBase;
    if(db) dataBase = db;
    else dataBase = await readDB();
    
    const {movies} = dataBase;
    return movies;
}

async function  getActors(db){
    // console.log(db);
    let dataBase;
    if(db) dataBase = db;
    else dataBase = await readDB();
    
    const {actors} = dataBase;
    return actors;
}

async function addMovie(newMovie){
    const db = await readDB();
    console.log(db)
    
    const movies =  await getMovies(db);
    movies.push(newMovie);

    const actors = await getActors(db);
    const newDB = {movies, actors};

    await writeDB(newDB);
}

async function addActor(newActor){
    const db = await readDB();
    
    const movies = await getMovies(db);
    const actors = await getActors(db);
    actors.push(newActor);
    const newDB = {movies, actors};

    await writeDB(newDB);
}

export {getMovies, addMovie, getActors, addActor};