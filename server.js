const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const fs = require('fs/promises');
const pg = require('pg');
const { application } = require('express');

app.use(express.static('./client')) ;
app.use(cors());

app.use((req,res, next) => {
    console.log('url', req.url)
    next();

})



const { DATABASE_URL, NODE_ENV, PORT } = process.env;

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  ssl: NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});


// read data
app.get('/api/trending', (req,res) => (
    pool.query('SELECT * FROM movies where isTrending = true').then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
))

app.get('/api/recommended', (req,res) => {
    pool.query('SELECT * FROM movies').then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

app.get('/api/movies', (req,res) => {
    const query = "SELECT * FROM movies where category like 'Movie'"
    pool.query(`${query}`).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

app.get('/api/tv', (req,res) => {
    const query = "SELECT * FROM movies where category like 'TV%'"
    pool.query(`${query}`).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

app.get('/api/bookmark', (req,res) => {
    pool.query('SELECT * FROM movies WHERE isbookmarked = true').then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

// update bookmark
app.patch('/api/bookmark/:title', (req,res) => {
    let title = req.params.title;
    pool.query(`UPDATE movies SET isBookmarked = NOT isBookmarked WHERE title LIKE '${title}'`)
    res.status(200).type('application/json').send('ok')
})

//search functionality
app.get('/api/search/:input', (req,res) => {
    let input = req.params.input;
    console.log(input)
    pool.query(`SELECT * FROM movies WHERE title ILIKE '%${input}%'`).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
    
})





app.listen(process.env.PORT || 3000, () => {
    console.log('You are now connected on port')
})