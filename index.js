const express = require('express'),
     bodyParser = require('body-parser'),
     logger = require('morgan');

//making instance of the app 
const app =express();

//seting a logger for the app
app.use(logger('dev'))


//setting a middleware for parsing user input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//a simple route 
app.get('/',(req,res)=>{
    res.send('<h5>hey am a chatbot</h5>');
});

//TODO:routes 





//use port 4000  or the default port 
const port = process.env.PORT || 4000
//starting the server up
app.listen(port, ()=>{
    console.log('stating up server on localhost:'+ port );
});