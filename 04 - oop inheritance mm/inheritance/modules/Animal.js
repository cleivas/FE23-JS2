export default class Animal{

    #type;
    #sound;
    constructor(type, sound){
        this.#type = type;
        this.#sound = sound;
    }

    makeSound(){
        console.log(`The ${this.#type} says`, this.#sound, this.#sound);
    }
    getSound(){
        return this.#sound;
    }
}