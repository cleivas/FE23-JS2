const arr = [32, 4, 2, 4, 3, 4];
console.log(Object.getPrototypeOf(arr));


// Construktorn
function Animal(type, sound, legs){
    this.type = type;
    this.sound = sound;
    this.legs = legs;
}

Animal.prototype.makeSound = function(){
    console.log(`the ${this.type}, says ${this.sound}`)
}

const horse = new Animal('horse', 'Gnägg...', 2);
const turtle = new Animal('turtle', 'blupblup', 4);


console.log(horse);
console.log(turtle);

horse.makeSound();
turtle.makeSound();