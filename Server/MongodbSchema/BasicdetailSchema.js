const mongoose = require('mongoose');


const userbasicSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
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