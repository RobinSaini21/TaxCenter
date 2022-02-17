const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const bp = require('body-parser');
const userInterestSchema = require('../MongodbSchema/InterestSchema');


const userInterestdata = new mongoose.model("Intrest", userInterestSchema)
router.post("/interest",(req,res)=>{

   const {savinginterest,fdrinterest,ppfinterest}  = req.body;
   const user = new userInterestdata({savinginterest,fdrinterest,ppfinterest})
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