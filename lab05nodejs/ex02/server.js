const express = require("express");
const app = express();
const path = require('path');

let dir = path.join(__dirname, '../../abc')
let url = path.resolve(__dirname, '../../abc.index.html')

app.use(express.static(dir));

const PORT = 3001;
app.listen(PORT,() =>{
    console.log(`Application started and Listening on port ${PORT}`);
});

app.get('/main',(req,res) =>{
    res.sendFile(url)
});

app.get('/',(req,res) => {
    res.setHeader('Content-Type','text/html')
    res.send('<h1>Test Page</h1>')
});