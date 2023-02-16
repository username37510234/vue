const express = require('express')
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

const list = [
    {
        name:'딸기',
        price:4000
    },
    {
        name:'천혜향',
        price:20000
    },
    {
        name:'사과',
        price:2000
    },
    {
        name:'스테비아토마토',
        price:10000
    },
]

server.get('/test',function(req, res){
    res.send('ㅎㅇ');
})

server.listen(3300, function(){
    console.log('server started at 3300 port');
})