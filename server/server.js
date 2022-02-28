require('dotenv').config();
const express =require('express');
require('./DB');//there is no need to write index.js because its default
const app=express();
const port = process.env.port;
app.use(express.json())
const cors=require('cors');
app.use(cors());



const officeRouter = require('./router/office-router')
app.use('/office',officeRouter);

app.use('/',(req,res)=>{
    res.send({message:"server is online"})
})
app.listen(port);