const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    use_id: {
        type: mongoose.Types.ObjectId
       },
    salary: {
        type: String
    },
    hoPro: {
        type: String
    },
    lessDe: {
        type: String
    },
    totalTaxIn: {
        type: String
    },
    tax: {
        type: String
    },
    lessRe: {
        type: String
    },
    addhealth: {
        type: String
    },
    totalTax: {
        type: String
    },
    lessRelief: {
        type: String
    },
    tsd: {
        type: String
    },
    addInterest: {
        type: String
    },
    lessSelf: {
        type: String
    },
    taxRefundable: {
        type: String
    }
})

const Income = mongoose.model("Income",Schema)
module.exports = Income