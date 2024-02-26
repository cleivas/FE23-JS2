import Fighter from "./Fighter.js"

export default class Gnome extends Fighter{

    constructor(name){
        // En array med "vapen" som skickas till super-konstruktorn
        // I fighter-klassen komer en knapp per vapen att skapas
        const weapons = [
            {name: 'Rose Wood Pipe', damage: 116},
            {name: 'Hat', damage: 35},
            {name: 'Flower', damage: 128},
            {name: 'Club', damage: 79},
            {name: 'Straw', damage: 12},
        ]

        // startvärdet på health är lite random
        const health = 845+Math.round(Math.random()*98);

        // Name används i konstruktorn till subklassen, när en instans skapas används ett namn som fyllts i i formuläret
        // resten bestäms i subklassen
        super(name, health, 'gnome', weapons);
    }
}
