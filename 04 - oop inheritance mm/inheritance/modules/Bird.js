import Animal from "./Animal.js";

export default class Bird extends Animal{
    #typeOfBird;

    constructor(typeOfBird, sound){
        super('bird', sound);
        this.#typeOfBird = typeOfBird;
    }
    makeSound(){
        console.log(`The ${this.#typeOfBird} says`, super.getSound(), this.getSound())
    }
}