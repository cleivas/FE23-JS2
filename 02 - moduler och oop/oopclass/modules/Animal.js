class Animal{
    constructor(type, sound){
        this.type = type;
        this.sound = sound;
    }

    makeSound(){
        console.log(`the ${this.type}, says ${this.sound}`)
    }
}

export {Animal};