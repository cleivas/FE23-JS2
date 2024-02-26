import Fighter from "./Fighter.js"

export default class Cyborg extends Fighter{

    constructor(name){
        const weapons = [
            {name: 'Laser', damage: 112},
            {name: 'Hack', damage: 78},
        ]

        const health = 870+Math.round(Math.random()*50);
        super(name, health, 'cyborg', weapons);
    }
}
