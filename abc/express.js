const express = require("express");
const app = express();
const path = require('path');

let dir = path.join(__dirname.'')
let url = path.resolve(__dirname.'')

app.use(express.static(dir));

const PORT = 3000;
app.listen(PORT,() =>{
    console.log('Application started and Listening on port ${PORT}');
});

app.get('*',(req,res) =>{
    res.redirect('/main');
})

app.get('/',(req.res) => {
    res.setHeader('Content-Type','text/html')
    res.send('<h1>Test Page</h1>')
});