const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'iot',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/locations',(req,res) =>{
    pool.query('SELECT * FROM location',(error,results,fields) =>{
        if(error){
            console.error(error);
            res.status(500).send('Error retrieving data from the database');
        } else{
            res.json(results);
        }
    });
});

app.listen(post,() => {
});