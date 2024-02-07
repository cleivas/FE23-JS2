export default class CountryCard{
    #name;
    #capital;
    #flagUrl;

    constructor(name, capital, flagUrl){
        this.#name=name;
        this.#capital = capital;
        this.#flagUrl = flagUrl;
    }

    display(container){
        // Create DOM-elements
        const div = document.createElement('div');
        const nameEl = document.createElement('h1');
        const capitalEl = document.createElement('h2');
        const flagImg = document.createElement('img');

        div.append(nameEl, capitalEl, flagImg)
        container.append(div);

        // Set element content
        nameEl.innerText = this.#name;
        capitalEl.innerText = this.#capital;
        flagImg.src = this.#flagUrl;

        // Hide capital and flag elements
        capitalEl.classList.add('hide')
        flagImg.classList.add('hide')

        // Toogle hide when the card container is clicked
        div.addEventListener('click', ()=>{
            capitalEl.classList.toggle('hide');
            flagImg.classList.toggle('hide');
        })
    }

}