const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const fs = require('fs/promises');
const pg = require('pg');

app.use(express.static('./client')) ;
app.use(cors());



const { DATABASE_URL, NODE_ENV, PORT } = process.env;

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  ssl: NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

// app.get('/', (req,res) => {
//     fs.readFile('./../client/index.html', 'utf-8', (data) => {
//         console.log(data);
//     })
// })

// app.get('/shows', (req,res) => {
//     fs.readFile('data.json', 'utf-8', (data) => {
//         return data;
//     }).then((data) => {
//         res.status(200).type('applicaiton/json').send(data)
//     })
// })

// read data
app.get('/api/trending', (req,res) => (
    // res.set('Access-Control-Allow-Origin', '*').send('good')
    pool.query('SELECT * FROM movies where isTrending = true', ).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
))



app.listen(process.env.PORT || 3000, () => {
    console.log('You are now connected on port')
})