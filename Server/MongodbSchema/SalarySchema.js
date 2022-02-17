const mongoose = require('mongoose');


const userSalarySchema = new mongoose.Schema({
    employerename : String ,
    employercategory: String,
    whether: String,
    professionaltax: String,
    taxablesalary: String
    
});

module.exports = userSalarySchema