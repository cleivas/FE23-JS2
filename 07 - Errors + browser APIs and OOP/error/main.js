import CustomError from "./modules/CustomError.js";

try{
    const namn = 'Ton';
    // if(namn === 'Ton') throw new Error('Namnet är lika med Ton');
    if(namn === 'Ton') throw new CustomError('TonError', 'Namnet är lika med Ton');
}
catch(error){
    console.log(error)
}

try{
    kslkj;
}
catch(error){
    console.log(error)
}

console.log('test')

async function fetchCountry(country){
    const url = 'https://restcountries.com/v3.1/name/'+country;

    const res = await fetch(url);
    if(res.status === 404) throw new CustomError('Error 404', 'No Country found')

    const data = await res.json();

    return data;
}

fetchCountry('fdxgchjblkm')
    .then(country => console.log(country))
    .catch(error=>console.log(error));
