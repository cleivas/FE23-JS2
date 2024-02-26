import Fighter from "./Fighter.js"

export default class Gnome extends Fighter{

    constructor(name){
        const weapons = [
            {name: 'Rose Wood Pipe', damage: 116},
            {name: 'Hat', damage: 35},
            {name: 'Flower', damage: 128},
            {name: 'Club', damage: 79},
            {name: 'Straw', damage: 12},
        ]

        const health = 845+Math.round(Math.random()*98);
        super(name, health, 'gnome', weapons);
    }
}
