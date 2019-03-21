const  express = require('express');

const mysql = require('mysql');

const bodyParser = require('body-parser');

// create connection 
const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password   : 'root',
    database    : 'nodemysql'

});

db.connect( (err) => {

        if(err) {
            throw err;
        }
        console.log('mysql connected...');

});

const app = express();

app.use(bodyParser.json());
 

//Create DB 
app.get('/createdb', (req, res) => {

    let sql = "CREATE DATABASE nomysqldb";
    
    db.query(sql , (err, result) => {

        if(err) {
            throw err;
        }
    
        console.log(result);
        res.send('Mysql db created');

    });

});

//get post data
app.post('/getpost',   (req, res) => {

    console.log(req.body.devtest);      // your JSON
    res.send(req.body);    // echo the result back
  

});


app.listen(3000 , () => {

    console.log(" Started server on port 3000");

});

