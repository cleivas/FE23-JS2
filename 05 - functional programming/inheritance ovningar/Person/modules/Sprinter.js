import Person from "./Person.js";

export default class Sprinter extends Person{
    #distance;
    #record = Infinity; 

    constructor(name, yearOfBirth, distance){
        // super('Tobb', 1985);
        super(name, yearOfBirth)
        this.#distance = distance;
    }
    setNewRecord(newTime){
        if(newTime < this.#record) this.#record = newTime;
    }
    getRecord(){
        return this.#record;
    }
}