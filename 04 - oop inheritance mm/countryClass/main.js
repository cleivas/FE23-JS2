import { fetchCountries } from "./modules/countryAPI.js";
import CountryCard from "./modules/CountryCard.js";

const form = document.querySelector('form');
const countryContainer = document.getElementById('countryContainer');

form.addEventListener('submit', event=>{
    event.preventDefault();
    const language = document.querySelector('input').value;

    fetchCountries(language).then( createCountryCards )
})

function createCountryCards(countries){
    
    for(const country of countries){
        const {flags, name, capital} = country;

        const card = new CountryCard(name.common, capital[0], flags.png );
        card.display(countryContainer)
    }
}