const mongoose =  require('mongoose');

const Employee = new mongoose.Schema({
    firstName:String,
    lastName:{type:String,required},
    email:String,
    age:Number
},
{timestamps:true}//this gives info when object been created and when got updated
);

module.exports= mongoose.model('Employee',Employee);//exporting the model -and get 2 args 1.document name/table 2.the object schema