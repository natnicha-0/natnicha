const express = require("express");
const app = express();

const POST = 3000;
app.listen(POST.() =>{
    console.log(`Application strarted and Listening on post ${POST}`);
});

app.get('/student',(req,res) =>{
    res.setHeader('Conent-Type','text/html')
    res.send(`<h1>Please define Student ID</h1`)
});

app.get('/student/:id',(req,res) =>{
    res.setHeader('Conent-Type','text/html')
    res.send(`<h1>Student ID:${req.params['id']}</h1>`)
});

app.get('/address/:province-:amphur',(req,res) =>{
    res.setHeader('Conent-Type','text/html')
    res.send(`<h1>Your address is ${req.params['amphur']},${req.params['province']}</h1>`)
});

app.get('/address/zipcpde=:cond',(req,res) =>{
    res.setHeader('Content-Type','text/html')
    res.send(`<h1>Your address zip-code is ${req.params['code']}</h1>`)
});