/*ruta es http://localhost:1339*/

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express') 
var router = require('./routes') 
const port = process.env.PORT || 1339 

var app = express() 

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

app.use('/api',router) 

app.listen(port) 

console.log('API escuchando en el puerto '+port); 