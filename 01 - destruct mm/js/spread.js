const numbers = [323, 4, 25, 5, 4, 6];

console.log(numbers);
console.log(...numbers)
console.log(323, 4, 25, 5, 4, 6)

console.log( Math.max( ...numbers ))


const arr = ['g', 'df', 32, 23, true]
console.log(...arr)

const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1, arr2);
arr1[0] = 1000;
console.log(arr1, arr2);

const arr3 = [...arr1];
console.log(arr1, arr2, arr3);
arr1[0] =0;
console.log(arr1, arr2, arr3);

console.log('---------------------')

const obj1 = {
    p1: 'från objekt 1',
    name: 'Jens'
  }
  
  const obj2 = {
    p2: 'från objekt 2',
    p3: 'också från objekt 2'
  }
  
const obj3 = {...obj1, ...obj2};
console.log(obj3);

