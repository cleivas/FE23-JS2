import Die from "./modules/Die.js";

const cssClasses = ['one', 'two', 'three', 'four', 'five', 'six'];
const dice = [];

for(let i=0; i<5; i++){
    dice.push( new Die() );
}


for(const die of dice){
    die.roll();
    console.log(die.current, cssClasses[die.current-1])

    const dieDiv = document.createElement('div');
    dieDiv.classList.add('die', cssClasses[die.current-1]);

    for(let i=0; i<die.current; i++){
        const dotDiv = document.createElement('div');
        dieDiv.append(dotDiv);
    }

    dieDiv.addEventListener('click', ()=>{
        dieDiv.classList.remove(cssClasses[die.current-1])

        die.roll();
        dieDiv.innerHTML = '';
        dieDiv.classList.add(cssClasses[die.current-1])

        for(let i=0; i<die.current; i++){
            const dotDiv = document.createElement('div');
            dieDiv.append(dotDiv);
        }
    })

    document.body.append(dieDiv)
}