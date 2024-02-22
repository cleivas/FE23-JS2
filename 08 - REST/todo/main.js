import displayTasks from "./modules/displayTasks.js";
import { getTasks, postTask, patchTask, deleteTask } from "./modules/fetchFunctions.js";

// Elements
const form = document.querySelector('form');
const tasksDiv = document.querySelector('#taskContainer');

// Post new task
form.addEventListener('submit', event=>{
    event.preventDefault();

    const newTask = {
        task: form.querySelector('input').value,
        done: false
    }
    form.reset();

    postTask(newTask).then(()=>{
        getTasks().then(displayTasks)
    })
})

// Remove task / toggle done 
tasksDiv.addEventListener('click', ({ target }) => {
    if (target.id != 'taskContainer') {
        /**
           *  Varje task-div (blå border) har ett id som motsvarar dess firebase-id. (se displayTasks.js) 
           *  Är tasken done har det elementet även en css-klass 'done'
           * 
           *  Klickar man på diven sparas id:t ner i en variabel.
           *  Metoden classList.contains() används för att kolla om tasken är done eller ej
           * 
           *  Klickar man på H3- eller button-elementet finns det inget id eller klass
           *  I de fallen hämtas infon från det närmaste parentelementet som är en div. Alltså task-diven
           *  Se: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
           */

        let id;
        let done;
        console.log(target.id)
        if (target.id === "") {
            id = target.closest('div').id;
            done = target.closest('div').classList.contains('done');
        }
        else {
            id = target.id;
            done = target.classList.contains('done');
        }
        // console.log(id, done)

        // OM elementet som klickats på är en button skickas en delete request
        // I annat fall en patch request
        // Alla tasks hämtas sedan igen så att det vi ser är den senast uppdaterade databasen
        if(target.tagName === 'BUTTON'){
            deleteTask(id).then(()=>{
                getTasks().then(displayTasks);
            })
        }
        else{
            // är done == true skickar vi med false, om done == false skickar vi med true
            patchTask(id, !done).then(()=>{
                getTasks().then(displayTasks);
            })
        }
    }
})

// Hämta och visa allt i todo-listan
getTasks().then(displayTasks)