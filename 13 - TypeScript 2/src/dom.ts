const p = document.createElement('p');
// p.innertext = 'Heh'; //Får varning om att egenskapen inte finns
p.innerText = 'Heh';
document.body.append(p);

const btn = document.querySelector('#ok') as HTMLButtonElement;
btn.addEventListener('click', ()=>{
    console.log(btn.disabled)
})

// Om elementet inte existerar ger detta inget error
// const btn = document.querySelector('#ok');
// btn?.addEventListener('click', ()=>{
//     console.log(btn?.disabled)
// })