export default class Class{
    #x; //Privata fields måste deklareras här
    y; //inte nödvändigt men många gör det som konvention

    constructor(x=10){

        this.#x = x;
        this.y = 100;
    }
    getX(){
        console.log(this, this.#x);
        return this.#x;
    }
}