import fs from "fs/promises";

async function readDatabase(){
    const rawDb = await fs.readFile('./src/db.json');
    return JSON.parse(rawDb);
}

async function writeDatabase(users){
    const db = {users};
    const done = await fs.writeFile('./src/db.json', JSON.stringify(db, null, 2));
    return done;
}

async function getUsers(){
    const db = await readDatabase();
    const {users} = db;
    return users;
}

async function getUser(id){
    const users = await getUsers();
    const user = users.find(u => u.id == id); //returns the first user with an id that matches the query id
    return user;
}

async function getAdmins(){
    const users = await getUsers();
    const admins = users.filter(user => user.admin); //returns an array with all users where admin euqals to true
    return admins;
}

async function addUser(user){
    const newUser = {id: Date.now(), ...user} //generates and adds an id to the new users
    const users = await getUsers();
    users.push(newUser);
    await writeDatabase(users)
    return newUser;
}

async function updateAdmin(id, isAdmin){

    const users = await getUsers();
    const user = users.find(u => u.id == id);
    user.admin = isAdmin;

    await writeDatabase(users);
    return user;
}

async function removeUser(id){
    const users = await getUsers();

    let index;
    const user = users.find((u, i) =>{
        index = i;
        return u.id == id;
    });

    if(user){
        users.splice(index, 1);
        await writeDatabase(users);
    }
    return user;
}

export {getUsers, getUser, getAdmins, addUser, updateAdmin, removeUser};
