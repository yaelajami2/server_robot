const express=require("express")
const {quions_Model}=require("../Models/quionModel")
const router=express.Router();
router.get("/",async (req,res)=>{
  let data=  await quions_Model.find({})
 res.json(data);
})
module.exports= router; 