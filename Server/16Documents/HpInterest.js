const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const userhpSchema = require('../MongodbSchema/UserhpSchema')




const userhpdata = new mongoose.model("hpData", userhpSchema)
router.post("/hp",(req,res)=>{

    const {house,interest,housepaid}  = req.body;
    const user = new userhpdata({house,interest,housepaid})
  console.log(user)
    user.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"sucessfull"})
        }
    })
}) 

module.exports = router