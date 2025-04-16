const express = require('express');
const app = express();
app.use(express.json());


require('dotenv').config(); 
const mysql = require('mysql2');

const port = 3000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the MySQL database');
});


app.get('/', (req, res) => {
    res.send('Hey..!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});