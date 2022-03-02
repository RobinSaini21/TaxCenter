const mongoose = require('mongoose');
const userbasicSchema = require('./BasicdetailSchema')


const mserSchema = new mongoose.Schema({
    email: String,
    password: String,
//   createdat: new Date,
  
    userbasicinfo: [userbasicSchema]
}, {  timestamps: true})  
const data = mserSchema;
// console.log(mserSchema.subpaths)

module.exports = mserSchema;