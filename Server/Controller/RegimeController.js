const Regime = require('../MongodbSchema/RegimeSehema')
const express = require('express')
const router = express.Router();

//regime
router.post("/regime", async (req, res) => {
const { regime ,use_id } = req.body
await Regime.create({
    regime:regime,
    use_id:use_id
}).then(data =>{
    res.status(200).send(data);
  }).catch(err =>{
    res.status(400).send(data);
  })
  });

  module.exports = router