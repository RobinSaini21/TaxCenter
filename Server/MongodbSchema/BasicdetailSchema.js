const mongoose = require('mongoose');


const userbasicSchema = new mongoose.Schema({
    pan: String,
    email: String,
    firstname:String,
    middlename: String,
    lastname: String,
    fathername: String,
    mobilenumber: String,
    aadharnum: String,
    gender: String,
    bday: String,
    
},{  timestamps: true});

module.exports = userbasicSchema