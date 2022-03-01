const user =require('../model/user-model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
module.exports = {
    register: async (req,res)=>{
        if(await user.exists({email:req.body.email})) return res.status(400).send({message:"Email Exists"}); //if email exist return exist ;
        //hash func gets 3args 1.what to encode 2.salt 3. callback for logic
        bcrypt.hash(req.body.password,10,async (err,hashPassword)=>{
            if(err) return res.status(500).send({message:"this is an error"});
            req.body.password=hashPassword // takes the old pass and encrypt it!
            await  user.create(req.body) 
                .then(result=> res.status(200).send({message:"User as been Added",result}))
                .catch(err=> res.status(500).send(err))
        })
    },
    login:async (req,res)=>{
        //checks if this email exist or not 
        if(user.exists(req.body.email) == false) return res.status(400).send({message:"User not exist"});
        //the mail and user we gets from the client
        const {email,password}=req.body;
        //findOne gets obj
        await user.findOne({email})
        .then(user=> {
            bcrypt.compare(password ,user.password,(err,isMatch)=>{
            if(err) return res.status(400).send({message:"error in pas"})
            if(!isMatch) return res.status(403).send({message:"Password incorrect"})
            //jwt.sign gets args 1.payload 2.secret 3.obj of timing 4.callback
            jwt.sign({...user},process.env.SECRET_KEY,{expiresIn:'30m'},(err,token)=>{
                if(err) return res.status(400).send({message:"Error"})
                res.status(200).send({message:"Login Sucssefuly",token});
            })
        })
        })
        .catch((err)=>{res.status(400).send({message:"error"})})
        
    }
}

// for exercise to make sure to check the functions on postman 