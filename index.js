const express = require('express'),
     bodyParser = require('body-parser'),
     logger = require('morgan');

     require('dotenv').config()

 //modules 
 const verification = require('./controllers/verification'); 
 const handleMessage = require('./controllers/handleMessage');    

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
//web hook route for verification
app.get('/webhook', verification);
app.post('/webhook', handleMessage );



//setting a 404 handler 
app.use((req,res,next)=>{
    res.status(404);
    res.send('<h1>oops 404 page not found :( </h1>');
})




//use port 4000  or the default port 
const port = process.env.PORT || 4000
//starting the server up
app.listen(port, ()=>{
    console.log('stating up server on localhost:'+ port );
});