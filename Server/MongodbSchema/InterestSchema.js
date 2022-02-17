const mongoose = require('mongoose')

const userInterestSchema = new mongoose.Schema({
    savinginterest: String,
    fdrinterest: String,
    ppfinterest: String,  
});

module.exports = userInterestSchema