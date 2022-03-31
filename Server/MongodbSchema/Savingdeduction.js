const mongoose = require('mongoose')

const DeductionSchema = new mongoose.Schema({
    use_id: {
     type: mongoose.Types.ObjectId
    },
    c80: {
        type: String
    },
    ccc80: {
        type: String
    },
    dcc80: {
        type: String
    },
    dcc801b: {
        type: String
    },
    ccd802: {
        type: String
    },     
    d80: {
        type: String
    },
    totalamount: {
        type: String
    },
    g80: {
        type: String
    },
    tta80: {
        type: String
    }
})

const Deduction = mongoose.model("Deduction",DeductionSchema)

module.exports = Deduction

