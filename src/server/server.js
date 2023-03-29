var path = require('path');
const express = require('express');
const port = 8081;
const mockAPIResponse=require('./mockAPI');

const app = express();

app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function(req,res){
    res.sendFile('dist/index.html')
});

app.listen(8081, function (){
    console.log('app listening on port 8081!')
});

app.get('/test', function(req,res){
    res.send(mockAPIResponse)
});
