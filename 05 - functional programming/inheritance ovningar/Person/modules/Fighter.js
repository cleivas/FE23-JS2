import Person from "./Person.js";

export default class Fighter extends Person{
    #wins = 0;
    #losses = 0;
    #draws = 0;
    #record;

    constructor(name, yearOfBirth){
        // super('Tobb', 1985);
        super(name, yearOfBirth)
        this.#setRecord();
    }
    winFight(){
        this.#wins++;
        this.#setRecord();
    }
    loseFight(){
        this.#losses++;
        this.#setRecord();
    }
    drawFight(){
        this.#draws++;
        this.#setRecord();
    }
    getRecord(){
        return this.#record;
    }
    #setRecord(){
        this.#record = `${this.#wins}-${this.#losses}-${this.#draws}`;
    }
}
