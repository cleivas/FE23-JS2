const getBtn = document.querySelector('#get');
const patchBtn = document.querySelector('#patch');
const postBtn = document.querySelector('#post');
const delBtn = document.querySelector('#del');

getBtn.addEventListener('click', ()=>{
    console.log('patching with my name')
    get().then(names=>{
        
        for(const key in names){
            console.log('Name:', key);
            console.log('Content:', names[key])
        }
    })
})
patchBtn.addEventListener('click', ()=>{
    console.log('patching with my name')
    patch()
})

postBtn.addEventListener('click', ()=>{
    console.log('posting something');
    post();
})
delBtn.addEventListener('click', ()=>{
    console.log('Deleting a node');
    del();
})

// Vi utgår från main
const baseUrl = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main'
const header = {
    "Content-type": "application/json; charset=UTF-8"
}

// Hämta allt från main
async function get(){
    const url = baseUrl + '.json';

    const res = await fetch(url);
    const data = await res.json();
    
    return data;
}

// Lägger till noden 'clara' med ett objekt till main
async function patch(){
    const url = baseUrl+'.json';

    const bodyContent = {
        clara:{
            favoriteColor: 'violet'
        }
    }

    const options = {
        method: 'PATCH',
        body: JSON.stringify(bodyContent),
        headers: header
    }
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}



// Lägger till en nod med ett firebase-id innehålllande ett objekt
async function post(){
    const url = baseUrl + '/clara.json';

    const content = {
        hobby: 'shaders',
        isSleepy: false
    }
    const options = {
        method: "POST",
        body: JSON.stringify(content),
        headers: header
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}

// Tar bort noden vid det specifika firebase-id:t
async function del(){
    const url= baseUrl + '/clara/-Nr-xv54mrgOsp1j76kY.json';

    const options = {
        method: 'DELETE',
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
}