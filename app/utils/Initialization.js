const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const initialSetup = (app) => {

    app.use(cors());
    // mongoose.connect(`mongodb+srv://Manish123dev:${process.env.MONGO_ATLAS_PW}@cluster0.mkne7ct.mongodb.net/?retryWrites=true&w=majority`,{ useUnifiedTopology: true }).then(()=>{
    // console.log("connect to database");
    // }).catch((err)=>{
    //     console.log(err);
    // })
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json());
}
module.exports = initialSetup;