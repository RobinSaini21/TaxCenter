const mongoose = require('mongoose');

const Sechma = new mongoose.Schema({
    use_id: {
        type: mongoose.Types.ObjectId
       },
    regime:{
        type: String
    }
})

const Regime = mongoose.model("Regime",Sechma)

module.exports = Regime