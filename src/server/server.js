const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse=require('./mockAPI');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

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

app.get('/', function(req,res){
    res.sendFile('dist/index.html')
});

app.get('/test', function(req,res){
    res.send(mockAPIResponse)
});

//server
app.listen(8081, function(){
    console.log('app listning on port 8081!')
});


