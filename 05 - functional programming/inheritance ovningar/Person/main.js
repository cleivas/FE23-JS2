import Person from "./modules/Person.js";
import Fighter from "./modules/Fighter.js";
import Sprinter from "./modules/Sprinter.js";

const person1 = new Person('Filip', 1985);
person1.present();

const fighter1 = new Fighter('Tobb', 1993);

fighter1.present();

console.log(person1, fighter1)

fighter1.winFight();
fighter1.winFight();
fighter1.winFight();
fighter1.loseFight();
fighter1.drawFight();

console.log(fighter1.getRecord())

console.log(fighter1)
fighter1.present()

const sprinter1 = new Sprinter('Bolt', 1986, 100);
sprinter1.setNewRecord(9.72)
sprinter1.present();
console.log( sprinter1.getRecord() )