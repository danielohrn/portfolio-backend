const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('elo') 
});

const PORT = 3000; 
app.listen(PORT); 
console.log('server running'); 
