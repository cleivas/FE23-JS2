type Com = {
    title: string,
    body: string,
    user: string,
    subject: 'info' | 'fun' | 'javascript'
}

async function getComments(): Promise<Com[]>{
    const url = 'https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/comments.json';

    const res = await fetch(url);
    const comments = await res.json();
    console.log(comments);

    return comments as Com[];
}

function displayComments(comments: Com[]): void{
    const container = document.querySelector('#commentsContainer') as HTMLDivElement;

    comments.forEach( comment =>{
        createCommentCard(comment, container);
    })
}

function createCommentCard({title, body, subject, user}: Com, container: HTMLDivElement): void{
    const card = document.createElement('div');
    const titleEl = document.createElement('h2');
    const bodyEl = document.createElement('p');
    const userEl = document.createElement('p');

    titleEl.innerText = title;
    bodyEl.innerText = body;
    userEl.innerText = user;

    card.append(titleEl, bodyEl, userEl);
    container.append(card);

    if(subject === 'fun') card.style.border = '2px solid hotpink'
    else if(subject === 'javascript') card.style.border = '2px solid darkgreen'
    if(subject === 'info') card.style.border = '2px solid darkorange'
}

getComments().then( displayComments )