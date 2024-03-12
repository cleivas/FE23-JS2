type MyFunc = (par:number, par2?: string) => string|number;

const myFunction:MyFunc = (p1, p2)=>{

    console.log(p1, p2)

    if(p2) return p2;
    else return p1;
}

console.log( myFunction(23, 'test') );
console.log( myFunction(23) );

type MyObj = {
    prop: string,
    func: MyFunc
}

const obj: MyObj = {
    prop: 'en prop',
    func(p1, p2){
        if(p2) return p2;
        else return p1;
    }
}