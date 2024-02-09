export default class Person{
    #name;
    #yearOfBirth;
    constructor(name, yearOfBirth){
        this.#name = name;
        this.#yearOfBirth = yearOfBirth;
    }
    present(){
        console.log(`My name is ${this.#name} and I am ${2024-this.#yearOfBirth} years old`)
    }
}