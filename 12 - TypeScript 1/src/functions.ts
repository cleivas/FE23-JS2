function add(x:number, y:number):number{
    return x+y;
}

console.log(add(3, 4));
console.log(add(2, 1, 6));


function addString(a:string, b:string):string{
    return a+b;
}

console.log(addString(2, 3));

function higherOrder(func:Function):void{
    func('WORD');
}

function callback(word:string):void{
    console.log(word);
}

higherOrder(callback);

callback();