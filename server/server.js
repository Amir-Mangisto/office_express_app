require('dotenv').config();
const port = process.env.port;
const express =require('express');
const app=express();
app.use(express.json())
const cors=require('cors');
app.use(cors());



const officeRouter = require('./router/office-router')
app.use('/office',officeRouter);

app.use('/',(req,res)=>{
    res.send({message:"server is online"})
})
app.listen(port);