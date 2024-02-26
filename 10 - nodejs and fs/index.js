import express from "express";
import * as db from './src/handledatabase.js'

const app = express();
app.use(express.json()); //hantera inkommande json

//För att vi ska kunna skicka requests från en browser
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

const message404 = {message: 'User not found'};

// Hämta alla användare
app.get('/api/users', (req, res) => {
    db.getUsers().then(users => res.json(users))
})

// Om requesten innehåller ett id i sökvägen hämtas endas en användare
app.get('/api/users/:id', (req, res) => {
    console.log(req.params.id);

    db.getUser(req.params.id).then(user => {
        if (user) res.json(user)
        else { //Om användaren inte hittas är result undefined
            res.status(404);
            res.json(message404);
        }
    })
})

// Hämta alla admins
app.get('/api/admins', (req, res) => {
    db.getAdmins().then(admins => res.json(admins))
})

// Lägga till en användare
app.post('/api/users', (req, res) => {
    console.log(req.body);
    db.addUser(req.body).then(newUser => res.send(newUser))
})

// Uppdatera admin till sant eller falskt för en viss användare
app.patch('/api/updateadmin/:id', (req, res) => {
    console.log(req.params.id, req.body.admin);

    // updateAdmin(id, true/false)
    db.updateAdmin(req.params.id, req.body.admin)
        .then(user =>{
            if(user) res.json(user)
            else{
                res.status(404);
                res.json(message404)
            }
        });
})

app.delete('/api/removeuser/:id', (req, res) => {
    db.removeUser(req.params.id).then(user => {
        if (user) res.json({ user, message: 'removed' })
        else {
            res.status(404);
            res.json(message404)
        }
    })
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})

