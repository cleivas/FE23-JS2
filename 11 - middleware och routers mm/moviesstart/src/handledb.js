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

async function getMovies(){
    const movies = await readDB();
    return movies;
}

async function addMovie(newMovie){
    const movies = await getMovies();
    movies.push(newMovie);
    await writeDB(movies);
}

export {getMovies, addMovie};