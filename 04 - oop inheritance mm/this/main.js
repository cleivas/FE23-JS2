import Class from "./modules/Class.js";

const obj = new Class(10);
obj.getX();

const obj2 = new Class(666);
obj2.getX();


const btn = document.querySelector('button');

// Error eftersom inget objekt är kopplat till metoden när den väl anropas
// btn.addEventListener('click', obj.getX);
// function higherOrder(func){
//     func();
// }
// higherOrder(obj.getX)


btn.addEventListener('click', ()=>{ 
    obj.getX(); 
});

// Binder obj2 till metoden getX vilket gör att this i metoden kommer innehålla obj2
btn.addEventListener('click', obj.getX.bind(obj2) );


// x får defaultvärdet
const obj3 = new Class();
obj3.getX()