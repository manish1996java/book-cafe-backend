const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const app = require('./app/app');






const PORT = process.env.PORT || 5500;

const MONODB_CONNECTION_URL = `mongodb://localhost:27017/test`;

const option = {}

const server = http.createServer(option,app);


mongoose.connect(MONODB_CONNECTION_URL,{ useUnifiedTopology: true })
.then(()=>{
    console.log("connect to database");
    server.listen(PORT);
}).catch((err)=>{
    console.log(err);
})

server.on('listening',()=>{
    console.log('listening');
})
server.on('close',(a)=>{
    console.log('close',a);
})
server.on('connect',(a)=>{
    console.log('connect',a);
})
server.on('error',(e)=>{
    console.log('error',e);
})









