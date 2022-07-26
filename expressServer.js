
const app = require('express')
const fs = require('fs/promises');



const app = express();
const PORT = 3000;

app.use(express.json());

// read data
app.get('/index/trending-data', (req,res) => (
    fs.readFile('data.json', 'utf-8').then((data) => {
        let trending = [];
        data = JSON.parse(data)
        for (let i = 0; i < data.length; i++) {
            if (data[i].isTrending) {
                trending.push(data[i])
                console.log(data)
            }
        }
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(trending)
        
    })
))

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})