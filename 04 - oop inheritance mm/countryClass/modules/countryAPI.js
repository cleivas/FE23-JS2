async function fetchCountries(language){
    const url = 'https://restcountries.com/v3.1/lang/';

    const res = await fetch(url+language);
    const countries = await res.json();

    return countries;
}

export {fetchCountries};