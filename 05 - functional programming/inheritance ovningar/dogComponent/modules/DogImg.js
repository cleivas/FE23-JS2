export default class DogImage{
    #breed;
    #imgUrl;

    constructor(breed){
        this.#breed = breed;
    }
    async fetchImage(){
        const apiUrl = `https://dog.ceo/api/breed/${this.#breed}/images/random`
        console.log(apiUrl)

        const res = await fetch(apiUrl);
        const data = await res.json();

        this.#imgUrl = data.message;
    }
    getImgUrl(){
        return this.#imgUrl;
    }
    getBreed(){
        return this.#breed;
    }
}