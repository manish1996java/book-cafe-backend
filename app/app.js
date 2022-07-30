const express = require('express');
const app = express();
const initialSetup = require('./utils/Initialization');
const userRoutes = require('./routings/user');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

app.use('/static',express.static(path.join(__dirname,'public')))

initialSetup(app);

const swaggerOptions = {
    definition : {
        openapi: "3.0.0",
        info: {
            title: "test Api",
            version: "1.0"
        },
        servers:[
            {
                url:'http://localhost:8000'
            }
        ],
    },
} 

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));



app.use('/user',userRoutes);
app.use('/',()=>{
    console.log('hit url');
})
module.exports = app;