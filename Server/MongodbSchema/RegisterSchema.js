const mongoose = require('mongoose');
const userbasicSchema = require('./BasicdetailSchema')


const mserSchema = new mongoose.Schema({
    email: String,
    password: String,
    token: String,
//   createdat: new Date,
  
    userbasicinfo: {
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
    }
}, {  timestamps: true})  
const data = mserSchema;
// console.log(mserSchema.subpaths)

module.exports = mserSchema;