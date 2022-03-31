const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const {check,validationResult} = require("express-validator");
const mserSchema = require('../MongodbSchema/RegisterSchema')
var ObjectId = mongoose.Types.ObjectId
require('dotenv/config')

const User = new mongoose.model("User", mserSchema)
console.log(process.env.SECRET_KEY)

router.post("/Register", async (req, res) => {

   
    try {
      const {  email, password } = req.body;
      if (!(email && password )) {
        res.status(400).send("All input is required");
      }
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
      encryptedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
email,
password: encryptedPassword,
token:"thisismysecret"
      })
  user.save
      const token = jwt.sign(
        { user_id: user._id, email },
        "thisismysecret",
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.status(201).json([token]);
    } catch (err) {
      console.log(err);
    }
  });
  



module.exports = router;