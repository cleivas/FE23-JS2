import DogImage from "./DogImg.js";

export default class DogComponent extends DogImage {
    constructor(breed){
        super(breed);
    }

    createGUI(container){
        const div = document.createElement('div');
        const img = document.createElement('img');
        const btn = document.createElement('button');

        container.append(div);
        div.append(img, btn);

        div.classList.add('card')

        btn.innerText = `Fetch ${this.getBreed()}`

        // img.src = this.getImgUrl();



        btn.addEventListener('click', ()=>{
            super.fetchImage()
                .then( () => img.src = this.getImgUrl() )
        })
    }
}