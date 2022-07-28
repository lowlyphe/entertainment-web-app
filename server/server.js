const express = require('express');
const app = express();
require("dotenv").config();
const fs = require('fs/promises');

// app.get('/shows', (req,res) => {
//     fs.readFile('data.json', 'utf-8', (data) => {
//         return data;
//     }).then((data) => {
//         res.status(200).type('applicaiton/json').send(data)
//     })
// })

// read data
app.get('/index/trending', (req,res) => (
    fs.readFile('server/data.json', 'utf-8').then((data) => {
        let trending = [];
        data = JSON.parse(data)
        for (let i = 0; i < data.length; i++) {
            if (data[i].isTrending) {
                trending.push(data[i])
            }
        }
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(trending)
        
    }).catch((e) => {
        console.log(e.stack)
    })
))



app.listen(process.env.PORT || 3000, () => {
    console.log('You are now connected')
})