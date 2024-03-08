

type Movie = {
    title: string,
    year: number,
    score: number,
    genre?: string[],
    showScore: Function
}

const movie1: Movie = {
    title: 'Titanic',
    year: 1997,
    score: 7.9,
    showScore(){
        console.log(this.score);
    }
}
