
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

// client.end((err) => {
//     if (err) {
//         console.error('Error closing the database connection:', err);
//     } else {
//         console.log('Database connection closed', err);
//     }
// });


