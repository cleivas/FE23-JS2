import express from "express";

const app = express();
app.use(express.json());


app.get('/', (req, res)=>{
    res.json({test: 'hej hej'})

})

const arr = [1, 2, 3, 4];
app.patch('/patchtest', (req, res)=>{
    console.log(req.query)
    arr[req.query.id] = req.query.num;
    res.json(arr);
})

const animals = [];
app.post('/animals', (req, res)=>{
    console.log(req.body);
    animals.push(req.body)
    res.json(animals);
})

const numbers = [3, 2, 4, 6, 3, 2, 4, 6,6, 7];
app.delete('/remove', (req, res)=>{
    numbers.pop();
    res.json(numbers);
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})