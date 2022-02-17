const mongoose = require('mongoose')

const userhpSchema = new mongoose.Schema({
    house: String,
    interest: String,
    housepaid: String, 
});

module.exports = userhpSchema