

export default function displayTasks(tasks){
    // console.log(tasks)
    const taskContainer = document.querySelector('#taskContainer')
    taskContainer.innerHTML = '';

    // Loopar igenom alla keys i objektet task
    // Varje key kommer vara ett firebase-id
    for(const key in tasks){
        const task = tasks[key];
        displayTask(task, key)
    }
}

function displayTask(taskObj, id){
    const taskContainer = document.querySelector('#taskContainer')
    const taskCard = createAndAppend('div', taskContainer);
    const taskH3 = createAndAppend('h3', taskCard, taskObj.task)
    
    taskCard.id = id; //Varje taskCard-element får ett id som motsvarar taskens firebase-id
    taskCard.classList.add('task') 

    if(taskObj.done){
        taskCard.classList.add('done');
        const removeBtn = createAndAppend('button', taskCard, 'X')
    } 
}

function createAndAppend(type, container, content){
    const el = document.createElement(type);
    if(type != 'div') el.innerText = content;
    container.append(el);
    return el;
}