const setCookieBtn = document.querySelector('#set') as HTMLButtonElement;
const sendCookieBtn = document.querySelector('#send') as HTMLButtonElement;

// Skickar en get request till localhost:3000/set-cookie där servern skickar tillbaka ett response med en set-cookie header som gör att browsern skapar en cookie
setCookieBtn.addEventListener('click', ()=>{
    const req = new Request('http://localhost:3000/set-cookie', {
        mode: 'cors',
        credentials: 'include'
    })
    
    fetch(req)
        .then(res=>res.json())
        .then(info=>console.log(info));
})

// Skickar en get request till localhost:3000/read-cookie där servern läser alla cookies som skickas med i requesten. 
// Endast om en cookie existerar och den har funnits mindre tid än dess maxAge kommer den skickas med requesten
sendCookieBtn.addEventListener('click', ()=>{
    const req = new Request('http://localhost:3000/read-cookie', {
        mode: 'cors',
        credentials: 'include'
    })
    
    fetch(req)
        .then(res=>res.json())
        .then(info=>console.log(info));
})