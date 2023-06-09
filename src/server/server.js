const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse=require('./mockAPI');
const bodyParser = require('body-parser');

import('node-fetch');

//instance of app
const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log(__dirname)

//API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
const apiKey = process.env.API_KEY
console.log('Your API Key is ${process.env.API_KEY}');
let userInput = []

//GET Route
app.get('/', function(req,res){
    res.sendFile('dist/index.html')
});

app.get('/test', function(req,res){
    res.send(mockAPIResponse)
});

//POST Route
app.post('/api', async function(req,res){
    userInput = req.body.url;
    console.log('url entered: ${userInput}');
    const apiURL = '${baseURL}Key=${apiKey}&url=${userInput}&lang=en';

    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    res.send(data);
});

//server
app.listen(3000, function(){
    console.log('app listning on port 3000!')
});

//export app
module.exports = app;



