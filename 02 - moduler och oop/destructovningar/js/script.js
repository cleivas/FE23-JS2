
const animal = {
    animal: 'lion',
    name: 'simba',
    continent: 'africa'
  };

function invertObject(obj){
    const invertedObj = {};
    Object.keys(obj).forEach( key => {
        invertedObj[ obj[key] ] = key;
    })

    // for(const key in obj){
    //     console.log(invertedObj)
    //     invertedObj[ obj[key] ] = key;

    //     console.log(key, obj[key])
    // }
    return invertedObj;
}
console.log(animal)
console.log(invertObject(animal));

const arr = [2, 3, 52, 53, 6];

for(const x in arr){
    console.log(x)
}