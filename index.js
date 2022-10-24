const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const allUsers = require('./Data/data.json')



app.get('/', (req, res)=>{
    res.send('API WORKING, GREAT!!')
});

app.get('/allUsers', (req, res)=>{
    res.send(allUsers)
})

app.get('/user/:id', (req, res)=>{
    const id = req.params.id;
    const singleUser = allUsers.find( u => u.id == id);
    res.send(singleUser);
})


app.listen(port, ()=>{
    console.log('Running on port:', port);
});