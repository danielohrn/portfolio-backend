const express = require('express'); 
const bodyParser = require('body-parser'); 
const mysql = require('mysql'); 
const cors = require('cors'); 
const app = express(); 

// testing 
const conn = require('./database.js');
// testing

const apiRoutes = require('./api'); 

app.use(cors()); 
app.use(bodyParser.json()); 
app.use('/api', apiRoutes); 

app.get('/test', (req, res) => {
    conn.query(
        'SELECT * FROM skills', 
    (error, skills) => {
        !error ? res.send(skills) : res.send(error); 
    }) 
});

const PORT = 1234; 
app.listen(PORT); 
console.log('server running'); 


