
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

    receiveDamage(damage){
        this.#health-=damage;
        if(this.#health<=0) {
            this.#health = 0;
            this.#displayDead();
        }
        else this.enableWeapons();
        this.#updateHealthDisplay();
    }   

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

 
    #updateHealthDisplay(){
        const healthEl = document.querySelector(`#${this.#name}Health`)
        healthEl.innerText = 'Health: ' + this.#health;
    }

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

    // target är spelaren som ska attackeras när en knapp klickas på
    // target är en instans av Fighter eller av en subklass till Fighter
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

    disableWeapons(){
        const btns = document.querySelectorAll(`#${this.#name} button`);
        for(const btn of btns) btn.disabled = true;
    }
    enableWeapons(){
        const btns = document.querySelectorAll(`#${this.#name} button`);
        for(const btn of btns) btn.disabled = false;
    }

}