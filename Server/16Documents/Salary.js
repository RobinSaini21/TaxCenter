const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const bp = require('body-parser');
const { request, Router } = require('express');
const cors = require('cors');
const userSalarySchema = require('../MongodbSchema/SalarySchema')




const salarydata = new mongoose.model("EMSalary", userSalarySchema)
router.post("/salary",(req,res)=>{

    const {employerename ,employercategory,whether,professionaltax,taxablesalary}  = req.body;
    const user = new salarydata({employerename,employercategory,whether,professionaltax,taxablesalary})
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