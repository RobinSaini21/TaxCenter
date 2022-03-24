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

// router.post("/Register", async (req, res) => {
//     const payload = {
//         user: {
//             id: User.id
//         }
//     };
//     jwt.sign(
//         payload,
//         "randomString", {
//         expiresIn: 10000
//     },
//         (err, token) => {
//             if (err) throw err;
//             return res.status(200).json({
//                 token
//             }
//             );
//         }

//     );
//     const body = req.body;

//     if (!(body.email && body.password)) {
//         return res.status(400).send({ error: "Data not formatted properly" });
//     }

//     const user = new User(body);
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//     user.save().then((doc) => res.status(201).send(doc)

//     );
    
// });

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
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
    //   const user = await User.create({
    //     first_name,
    //     last_name,
    //     email: email.toLowerCase(), // sanitize: convert email to lowercase
    //     password: encryptedPassword,
    //   });
      const user = await User.create({
email,
password: encryptedPassword,
token:"thisismysecret"
      })
  user.save
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        "thisismysecret",
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  // const data = {
  //   user: user,
  //   // token: token
  // }
      // return new user
      res.status(201).json([token]);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  



module.exports = router;