const mongoose=require('mongoose');
const STRING_CONNECTION = process.env.STRING_CONNECTION;
mongoose.connect(STRING_CONNECTION, 
    {
        //second parameter is the option
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("mongo is connected"))
    .catch((err)=>console.log(err,"error"))

module.exports=mongoose.connection;//exporting the connection itself
