import Fighter from "./Fighter.js"

export default class Cyborg extends Fighter{

    constructor(name){
        // En array med "vapen" som skickas till super-konstruktorn
        // I fighter-klassen komer en knapp per vapen att skapas
        const weapons = [
            {name: 'Laser', damage: 112},
            {name: 'Hack', damage: 78},
        ]

        // startvärdet på health är lite random
        const health = 870+Math.round(Math.random()*50);

        // Name används i konstruktorn till subklassen, när en instans skapas används ett namn som fyllts i i formuläret
        // resten bestäms i subklassen
        super(name, health, 'cyborg', weapons);
    }
}
