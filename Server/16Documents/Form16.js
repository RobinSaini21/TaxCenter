const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const form16schema = require('../MongodbSchema/Form16Schema')



const userform16data = new mongoose.model("form16Data", form16schema)
router.post("/form16data",(req,res)=>{

    const {   pan,
        finacialyear,
        regimetype,
        tanofemploye,
        organisation,
        typeoforganisation,
        salarysec171,
        salarysec172,
        lieusalarysec173,
        grossalary,
        allowancessectio,
        balance,
        standarDeduction,
        professionaltax,
        incomefromsalary,
        incomeonhouse,
        incomeothersource,
        c80,
        ccc80,
        ccd80,
        ccd801b,
        ccc80companycontriion,
        d80,
        dd80,
        ddb80,
        e80,
        ee80,
        u80,
        g80,
        gg80,
        tta80,
        totaldeduciton,
        reliefus89,
        totaltaxdeducted}  = req.body;
    const user = new userform16data({   pan,
        finacialyear,
        regimetype,
        tanofemploye,
        organisation,
        typeoforganisation,
        salarysec171,
        salarysec172,
        lieusalarysec173,
        grossalary,
        allowancessectio,
        balance,
        standarDeduction,
        professionaltax,
        incomefromsalary,
        incomeonhouse,
        incomeothersource,
        c80,
        ccc80,
        ccd80,
        ccd801b,
        ccc80companycontriion,
        d80,
        dd80,
        ddb80,
        e80,
        ee80,
        u80,
        g80,
        gg80,
        tta80,
        totaldeduciton,
        reliefus89,
        totaltaxdeducted})
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