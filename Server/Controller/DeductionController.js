const Deduction = require("../MongodbSchema/Savingdeduction");
const express = require("express");
const router = express.Router();

router.post("/deduction", async (req, res) => {
  const { c80, ccc80, dcc80, dcc801b, ccd802, d80, totalamount, g80, tta80 , use_id } = req.body;
   await Deduction.create({
    use_id: use_id,
    c80: c80,
    ccc80: ccc80,
    dcc80: dcc80,
    dcc801b: dcc801b,
    ccd802: ccd802,
    d80: d80,
    totalamount: totalamount,
    g80: g80,
    tta80: tta80,
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
