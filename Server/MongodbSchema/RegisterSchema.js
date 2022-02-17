const mongoose = require('mongoose')


const mserSchema = new mongoose.Schema({
    email: String,
    password: String
})

module.exports = mserSchema;