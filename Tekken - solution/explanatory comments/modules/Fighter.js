export default class Fighter{
    #name;
    #health;
    #cssClass;
    #weapons;

    constructor(name, health, cssClass, weapons ){
        this.#name = name;
        this.#health = health;
        this.#cssClass = cssClass;
        this.#weapons = weapons;
    }

    // anropas när en spelare blir attackerad
    // värdet av health minskas med damage och knapparna enablas igen så att e är klickbara så att spelaren kan attackera
    // Om helath är under 0 anropas displayDead så att spelaren ser död ut
    receiveDamage(damage){
        this.#health-=damage;
        if(this.#health<=0) {
            this.#health = 0;
            this.#displayDead();
        }
        else this.enableWeapons();
        this.#updateHealthDisplay();
    }   

    // Skapar element som gör att spelaren visualiseras
    // cssClass skiljer sig mellan olika subklasser av fighter och gör att olika typer av fighters ser olika ut. 
    // Stilreglerna är definierade i style.css
    display(container){
        const div = document.createElement('div');
        const nameEl = document.createElement('h1')
        const healthEl = document.createElement('h2')
        
        div.append(nameEl, healthEl);
        container.append(div);

        div.classList.add(this.#cssClass)
        nameEl.classList.add('center')
        healthEl.classList.add('center')
        

        div.id = this.#name;
        healthEl.id = this.#name+'Health';

        nameEl.innerText = this.#name;
        healthEl.innerText = 'Health: ' + this.#health;
    }

    // Anropas från receiveDamage och uppdaterar elementet som visar värdet av health. 
    #updateHealthDisplay(){
        const healthEl = document.querySelector(`#${this.#name}Health`)
        healthEl.innerText = 'Health: ' + this.#health;
    }

    // Tar bort knappar och Visar texten KO
    #displayDead(){
        const btnContainer = document.querySelector(`#${this.#name} div`);
        btnContainer.remove();

        const div = document.querySelector(`#${this.#name}`);
        const h1 = document.createElement('h1');

        h1.innerText = 'KO';
        h1.classList.add('center');

        div.append(h1)

        setTimeout( ()=>{
            location.reload();
        }, 3000)
    }

    // Target är en instans av fighter
    // För varje element i den privata arrayen "weapons" skapas en knapp.
    // För varje knapps läggs en eventlistener till, när man klickar på knappen anropas receiveDamage på target
    // Argumentet som skickas med receiveDamage beror på damage i weapon
    // weapons kommer från en subklass
    setupWeapons(target){
        const div = document.querySelector(`#${this.#name}`)
        const btnContainer = document.createElement('div');

        div.append(btnContainer);
        btnContainer.classList.add('flex')

        for(const weapon of this.#weapons){
            const btn = document.createElement('button');
            btn.innerText = weapon.name;
            btnContainer.append(btn);

            btn.addEventListener('click', ()=>{
                target.receiveDamage(weapon.damage);
                this.disableWeapons();
            })
        }
    }


    // Gör så att knapparna inte är klickbara
    disableWeapons(){
        const btns = document.querySelectorAll(`#${this.#name} button`);
        for(const btn of btns) btn.disabled = true;
    }
    // Gör så att knapparna är klickbara
    enableWeapons(){
        const btns = document.querySelectorAll(`#${this.#name} button`);

        for(const btn of btns) btn.disabled = false;
    }

}