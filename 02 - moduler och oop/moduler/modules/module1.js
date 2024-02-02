const a = 'a';

function myFunction(){
    console.log('this is my function in module 1');
}

function defaultFunction(){
    console.log('default function in module 1');
}

export {a, myFunction};
export default defaultFunction;