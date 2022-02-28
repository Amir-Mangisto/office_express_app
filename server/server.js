require('dotenv').config();
const express =require('express');
const cors=require('cors');
require('./DB');//there is no need to write index.js because its default
const app=express();
app.use(cors());
const port = process.env.port;
app.use(express.json())



const officeRouter = require('./router/office-router')
app.use('/office',officeRouter);

app.use('/',(req,res)=>{
    res.send({message:"server is online"})
})
app.listen(port);