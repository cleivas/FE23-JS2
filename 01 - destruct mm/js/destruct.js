const user = {
    name: 'Batman',
    age:45,
    isStrong: false
}
const user2 = {
    name: 'Yasir',
    age: 26,
    isStrong: false
}

console.log(user)

// const age = user.age;
// const name = user.name;

const {age, name} = user;
// const {age, name} = user2;

// let test = 0;
// let test = 10;



console.log(name, age)

function logName({name, isStrong}){
    console.log(name, isStrong)
}

logName(user);
logName(user2)


const arr = [0, 1, 2, 3, 4];
const [a, b] = arr;
console.log(a, b)


async function getCountry(country){
    const url = 'https://restcountries.com/v3.1/name/' + country;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    const [countryObj] = data;
    console.log(countryObj);

    return countryObj;
}

// const x = getCountry('ertdgfdjgfjc');
// console.log(x);

getCountry('sweden')
    .then( logPopulation )
    .catch( logError )

function logPopulation( {population, region, name} ){
    console.log(population, region, name);

    const {official} = name;
    console.log(official)
}

function logError(error){
    console.log(error)
}