const mysql = require('mysql'); 

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'local_skills'
});

connection.connect((err) => {
    console.log(err || 'connected to mysqul'); 
}); 

module.exports = connection; 