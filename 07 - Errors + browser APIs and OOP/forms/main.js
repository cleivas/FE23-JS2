const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();

    const formData = new FormData(form);

    // console.log(formData);
    // for(const [key, value] of formData){
    //     console.log(key, value)
    // }

    // console.log(formData.get('num'))

    fetchBeer(formData)
        .then(beers=>console.log(beers))
        .catch(error=>console.log(error))
})


async function fetchBeer(formData){
    const searchParams = new URLSearchParams(formData);
    console.log(searchParams)

    const url = new URL('https://api.punkapi.com/v2/beers');

    url.search = searchParams.toString();
    console.log(url.toString())

    const res = await fetch(url)
    const data = await res.json();

    return data;
}

// const url = new URL('https://api.punkapi.com/v2/beers?beer_name=ipa')

// console.log(url.search);