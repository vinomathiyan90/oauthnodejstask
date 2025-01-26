const express = require('express')//express 
const app = express();
const bodyParser = require('body-parser')//body-parser
app.use(bodyParser.json());
const dotenv = require('dotenv')
dotenv.config();
const database = require('./config/url-shortenerdb'); 

// mongoose connection
database();

//cilentid endpoint


const PORT = process.env._PORT;
app.listen(PORT ,()=>{
    console.log( `Server is running On PORT NO: ${PORT}`)
})