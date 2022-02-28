require('dotenv').config();
const express =require('express');
require('./DB');//there is no need to write index.js because its default
const cors=require('cors');
const officeRouter = require('./router/office-router')
const app=express();
app.use(express.json())
app.use(cors());
const port = process.env.port;
app.listen(port);
app.use('/office',officeRouter);
app.use('/',(req,res)=>{
    res.send({message:"server is online"})
})



