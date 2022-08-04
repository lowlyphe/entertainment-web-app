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
    pool.query('SELECT * FROM movies ORDER BY ratingaverage DESC').then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

app.get('/api/drama', (req,res) => {
    const query = "SELECT * FROM movies WHERE to_tsvector(name || ' ' || genres0 || ' ' || genres1 || ' ' || genres2) @@ to_tsquery('Drama') ORDER BY ratingaverage DESC"
    pool.query(`${query}`).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

app.get('/api/comedy', (req,res) => {
    const query = "SELECT * FROM movies WHERE to_tsvector(name || ' ' || genres0 || ' ' || genres1 || ' ' || genres2) @@ to_tsquery('Comedy') ORDER BY ratingaverage DESC"
    pool.query(`${query}`).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

app.get('/api/action', (req,res) => {
    const query = "SELECT * FROM movies WHERE to_tsvector(name || ' ' || genres0 || ' ' || genres1 || ' ' || genres2) @@ to_tsquery('Action') ORDER BY ratingaverage DESC"
    pool.query(`${query}`).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

app.get('/api/scifi', (req,res) => {
    const query = "SELECT * FROM movies WHERE to_tsvector(name || ' ' || genres0 || ' ' || genres1 || ' ' || genres2) @@ to_tsquery('Science-Fiction') ORDER BY ratingaverage DESC"
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
app.get('/api/bookmark/:id', (req,res) => {
    let id = req.params.id;
    console.log(req.params.id)
    pool.query(`SELECT * FROM movies WHERE id = ${id}`).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
})

app.patch('/api/bookmark/:id', (req,res) => {
    let id = req.params.id;
    pool.query(`UPDATE movies SET isBookmarked = NOT isBookmarked WHERE id = ${id}`)
    res.status(200).type('application/json').send('ok')
})

//search functionality
app.get('/api/search/:input', (req,res) => {
    let input = req.params.input;
    console.log(input)
    pool.query(`SELECT * FROM movies WHERE to_tsvector(name || ' ' || genres0 || ' ' || genres1 || ' ' || genres2 || ' ' || summary) @@ plainto_tsquery('${input}');`).then((data) => {
        res.status(200).type('application/json').send(data.rows)
    })
    
})





app.listen(process.env.PORT || 3000, () => {
    console.log('You are now connected on port')
})