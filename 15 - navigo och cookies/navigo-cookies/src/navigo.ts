import Navigo from "navigo";

const router = new Navigo('/');

router.on('/', ()=>{
    document.body.innerHTML = '<h1>STARTSIDA</h1>';
})

router.on('/info', ()=>{
    document.body.innerHTML = '<h1>INFO</h1>';
})

router.on('/product/:id', (info)=>{
    console.log(info)
    if(info && info.data && info.data.id) document.body.innerHTML = `<h1>Product ${info.data.id}</h1>`;
})



router.resolve();