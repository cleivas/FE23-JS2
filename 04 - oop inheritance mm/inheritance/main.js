import Animal from "./modules/Animal.js";
import Bird from "./modules/Bird.js";

const animal = new Animal('bird', 'PIIP');

animal.makeSound();

const stork = new Bird('stork', 'KAHH');
stork.makeSound();

console.log(stork)