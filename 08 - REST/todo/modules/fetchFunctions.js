const baseUrl = 'https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list'
const header = {
    "Content-type": "application/json; charset=UTF-8"
}


async function getTasks(){
    const url = baseUrl+'.json';

    const res = await fetch(url);
    const tasks = await res.json();
    return tasks;
}

async function postTask(task){
    const url = baseUrl + `.json`;

    const options = {
        method: "POST",
        body: JSON.stringify(task), 
        headers: header
    }

    const res = await fetch(url, options);
    const info = await res.json();

    console.log(info);
}

async function patchTask(id, done){
    const url = baseUrl + `/${id}.json`;

    const options = {
        method: "PATCH",
        body: JSON.stringify({done}), //json från {done: true/false}
        headers: header
    }

    const res = await fetch(url, options);
    const info = await res.json();

    console.log(info);
}

async function deleteTask(id){
    const url = baseUrl + `/${id}.json`;
    const options = {
        method: "DELETE",
    }

    const res = await fetch(url, options);
    const info = await res.json();

    console.log(info);
}

export {getTasks, postTask, patchTask, deleteTask}

