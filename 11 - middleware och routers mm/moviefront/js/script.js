async function fetchMovies(){
    const url = 'http://localhost:3000/movies';

    const res = await fetch(url);
    const movies = await res.json();
    console.log(movies)
}

fetchMovies();

const newMovie = {
    name: "Shrek",
    year: "2001",
    director:"vet ej",
    genre: "animation"
}

async function postMovie(){
    const url = 'http://localhost:3000/movies';

    const option = {
        method: 'POST',
        body: JSON.stringify(newMovie),
        headers: {
            "Content-type": "application/json"
        }
    }

    const res = await fetch(url, option);
    const movie = await res.json();
    console.log(movie)
}
postMovie();
