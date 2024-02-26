/**
 * Tekken Grit - en inlämningsuppgift i JavaScript 2
 * Av Clara Leivas 2024
 * 
 * Det här är en möjlig lösning av inlämningsuppgiften. Det finns många andra möjliga lösningar
 * Beskrivning av uppgiften hittas här: https://docs.google.com/document/d/1j25ag-mnQWjUAMHwlKf2CqLxY5qKmTioz0r-dftu2qc
 * 
 * Spelare
 * - Varje spelare kan vara en fighter av typen Gnome eller Cyborg. Skillnaden mellan dessa är antal vapen och stylingen på elementen som används för att visa fightern.
 * - I klassen Fighter bestäms hur en fighter visas och vad som händer när den attackeras.
 * - I subklasserna Gnome och Cyborg, bestäms vilka vapen en fighter har, samt vilken health fightern startar med 
 * 
 * Attackera
 * - En spelare attackerar den andra spelaren genom att klicka en knapp.
 * - När en fighter attackerar görs det genom att receiveDamage() anropas på den fightern som attackeras. 
 * - Det finns alltså ingen attack-metod utan spelare 1 måste ha information om spelare 2 så att spelare 2s metoder kan anropas inifrån spelare 1. 
 */

import Gnome from "./modules/Gnome.js";
import Cyborg from "./modules/Cyborg.js";

const playerForm = document.querySelector('form');


playerForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(playerForm);
    console.log(formData) 


    const players = [];
    players.push( createFighter(formData.get('p1Type'), formData.get('p1Name')) );
    players.push( createFighter(formData.get('p2Type'), formData.get('p2Name')) );

    playerForm.style.display = 'none';

    const gameDiv = document.querySelector('#gameContainer')
    players[0].display(gameDiv);
    players[1].display(gameDiv);


    players[0].setupWeapons(players[1]);
    players[1].setupWeapons(players[0]);

})


function createFighter(type, name) {
    switch (type) {
        case 'cyborg':
            return new Cyborg(name);
        case 'gnome':
            return new Gnome(name);
    }
}