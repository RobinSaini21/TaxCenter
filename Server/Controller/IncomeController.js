const Income = require("../MongodbSchema/IncomeSchema");
const express = require("express");
const router = express.Router();

router.post("/income", async (req, res) => {
  const {
    use_id,
    salary,
    hoPro,
    lessDe,
    totalTaxIn,
    tax,
    lessRe,
    addhealth,
    totalTax,
    lessRelief,
    tsd,
    addInterest,
    lessSelf,
    taxRefundable,
  } = req.body;
  await Income.create({
    use_id: use_id,
    salary:salary,
    hoPro:hoPro,
    lessDe:lessDe,
    totalTaxIn:totalTaxIn,
    tax:tax,
    lessRe:lessRe,
    addhealth:addhealth,
    totalTax:totalTax,
    lessRelief: lessRelief,
    tsd:tsd,
    addInterest:addInterest,
    lessSelf:lessSelf,
    taxRefundable:taxRefundable
  }).then(data =>{
    res.status(200).send(data);
  }).catch(err =>{
    res.status(400).send(data);
  })
  console.log(req.body);
});

module.exports = router;

