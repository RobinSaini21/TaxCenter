const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const bp = require('body-parser');
const userbasicSchema = require('../MongodbSchema/BasicdetailSchema')


const basicdata = new mongoose.model("UserBasicData", userbasicSchema)

router.get("/userbasicdetails",(req,res) =>{
    res.send("you are in user singup")
})
// console.log(request.body)
router.post("/userbasicdetails",(req,res)=>{
    console.log(req.body) 
    const {pan,email,firstname,middlename,lastname,fathername,mobilenum,aadharnum,gender,bday}  = req.body;
    
    basicdata.findOne({email:email},(err,user)=>{
        
        if(user){
      
            res.send({message:"user already exist"})
        }else {
    const user = new basicdata({ pan,email,firstname,middlename,lastname,fathername,mobilenum,aadharnum,gender,bday})
    console.log(req.body)
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })


}) 


module.exports = router