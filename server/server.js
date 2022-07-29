const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const fs = require('fs/promises');
const pg = require('pg');

app.use(express.static('../client')) ;
app.use(cors());

const corsOptions = {
    origin: '*'
}


const POOL = new Pool ({
    connectionString: DATABSASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})


// app.get('/shows', (req,res) => {
//     fs.readFile('data.json', 'utf-8', (data) => {
//         return data;
//     }).then((data) => {
//         res.status(200).type('applicaiton/json').send(data)
//     })
// })

// read data
app.get('/api/trending', (req,res) => (
    res.set('Access-Control-Allow-Origin', '*').send('good')
))



app.listen(process.env.PORT || 3000, () => {
    console.log('You are now connected on port')
})