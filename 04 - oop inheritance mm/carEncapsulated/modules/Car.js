export default class Car{
    #model;
    #year;
    #maxSpeed;
    #currentSpeed;

    constructor(model, year, maxSpeed){
        this.#model = model;
        this.#year = year;
        this.#maxSpeed = maxSpeed;
        this.#currentSpeed = 0;
    }
    accelerate(newSpeed){
        for(let i=this.#currentSpeed; i<Math.min(newSpeed+this.#currentSpeed, this.#maxSpeed); i+=10){
            console.log(i);
            
        }
        this.#currentSpeed +=newSpeed;
        console.log('Final speed: ', this.#currentSpeed)
    }
    brake(){
        for(let i=this.#currentSpeed; i>=0; i-=10){
            console.log(i)
        }
        this.#currentSpeed = 0;
    }
    setMaxSpeed(newMax){      
        this.#maxSpeed = newMax;
    }
}

