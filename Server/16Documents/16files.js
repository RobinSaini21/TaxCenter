const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const fileNameSchema = require('../MongodbSchema/fileNameSchema')


const fileName = new mongoose.model("16file",fileNameSchema )
router.post("/filename",(req,res)=>{

    const {filename}  = req.body;
    const user = new fileName({filename})
  console.log(req.body)
    user.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"sucessfull"})
        }
    })
}) 

module.exports = router