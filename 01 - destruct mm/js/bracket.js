const arrObj = {
    0: 'zero',
    1: 'one',
    2: 'two'
  };
// console.log( arrObj.0 );
console.log( arrObj[0] );

const obj = {
    zero: 0,
    one: 1,
    two: 2
  };

  console.log(obj.zero)
  console.log( obj['zero'])

  const key = 'zero';
  console.log(obj[key]);

  const user = {
    name: 'Gandalf',
    type: 'Wizard',
    hobby: 'Smoke'
}

for(const prop in user){
    console.log(prop, user[prop]);

    if(prop === 'type') break;
}
