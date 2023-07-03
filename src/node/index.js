const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const port = 5001;


const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'najottalim',
    password: '12345',
    port: 5432
});

client.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
        // Perform database operations here
    }
});

client.query('Select * from book', (err, result) => {
    if (err) {
        console.error('Error executing query:', err);
    } else {
        console.log('Query result:', result.rows);
    }
});

client.end((err) => {
    if (err) {
        console.error('Error closing the database connection:', err);
    } else {
        console.log('Database connection closed');
    }
});








// const postgres = require('pg');


// const client = postgres.createConnection({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'najottalim',
//     password: '12345',
//     port: 5432
// });


app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});

// client.connect(err => {
//     if (err) {
//         console.log(err);
//         return err;
//     } else {
//         console.log('Connected ------ OK');
//     }
// });

let query = 'Select * from book';

// client.query(query, (err, res, field)=>{
//     console.log(err);
//     console.log(res);
//     // console.log(field);
// });

app.post('/send', (req, res) => {

    // client.connect();
    // let result = client.query('Select * from book');
    // console.log(result.value);
    // console.log('tugadi')
    // client.end();


    // console.log(req.body);
    res.json({requestBody: req.body})

});


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});