const employees = require('../model/emploee-model');

const getAllOffice = async (req,res)=>{
   await employees.find()
   .then(result => res.send(result))
   .catch(err => res.send({message:err}));
}
const getOfficeById =async (req,res)=>{
  await employees.findById(req.params.id)
  .then((result)=>{res.send(result)})
  .catch((err)=>{res.status(404).send({message:err})})
}
const addOffice =async (req,res)=>{
 await   employees.create(req.body)
    .then((data)=>{ res.send(data)})
    .catch((err)=>{ res.status(403).send({mess:err})})
}
const updateOffice =async (req,res)=>{
    await employees.findByIdAndUpdate({_id: req.params.id},req.body)
    employees.findOne({_id: req.params.id})
    .then((data)=>{res.send(data)})
    .catch((err)=>{ res.status(403).send({mess:err})})
}
const deleteOffice =async (req,res)=>{
    await employees.findByIdAndDelete({_id: req.params.id},req.body)
    .then((data)=>{ res.send(data)})
    .catch((err)=>{ res.status(403).send({mess:err})})
}

module.exports = {
    getAllOffice,
    getOfficeById,
    addOffice,
    updateOffice,
    deleteOffice
}