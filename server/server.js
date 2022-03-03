require("dotenv").config();
require("./DB"); //there is no need to write index.js because its default
const express = require("express");
const cors = require("cors");
const officeRouter = require("./router/office-router");
const userRouter = require("./router/user-router");
const app = express();
const passport = require("passport");
require("./config/passport")(passport);
const path=require('path');
app.use(express.json());
app.use(cors());
const port = process.env.PORT;



// app.use('/',(req,res)=>{
//     res.send({message:"server is online"})
// })
app.use(passport.initialize());
app.use("/users" , userRouter);
app.use("/office",passport.authenticate('jwt',{session:false}), officeRouter);  

app.listen(port);


//must be the last part of the code otherwise will not work
if(process.env.NODE_ENV === 'production' ){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'../client/build','index.html')))
}