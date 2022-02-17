const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const {check,validationResult} = require("express-validator")
const User = new mongoose.model("User")

// router.post("/Login", (req, res) => {
    // jwt.sign(
    //     payload,
    //     "randomString", {
    //         expiresIn: 10000
    //     },
    //     (err, token) => {
    //         if (err) throw err;
    //         res.status(200).json({
    //             token
    //         });
    //     }
    // );
//     const { email, password } = req.body;
//     User.findOne({ email: email }, async (err, user) => {
//         // bcrypt.compare(req.body.password != user.password,function(err,res){
//         //     if(req.body.password != user.password){
//         //         res.json({success: false, message: 'passwords do not match'});
//         //       } else {
//         //         // Send JWT
//         //       }
//         // })
//         if (user) {
//             // console.log(bcrypt.compare(user.password))
//             if (password === user.password) {
              
                
//                 const payload = {
//                     user: {
//                         id: user.id
//                     }
//                 };
//                 jwt.sign(
//                     payload,
//                     "randomString", {
//                     expiresIn: 10000
//                 },
            
//                     (err, token) => {
//                         if (err) throw err;
//                         return res.status(200).json({
//                             message: "login sucess", user: user ,token: token
                          
//                         });
//                     }
                    
//                 );
//             //     res.send({ 
//             //  })
//             } else {
//                 res.send({ message: "wrong credentials" })
//             }
//         } else {
//             res.send("not register")
//         }
//     })
//     const payload = {
//         user: {
//             id: User.id
//         }
//     };
//     jwt.sign(
//         payload,
//         "randomString", {
//             expiresIn: 10000
//         },
//         (err, token) => {
//             if (err) throw err;
//            return res.status(200).json({
//                 token
//             });
//         }
//     );

// })




router.post(
  "/Login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email
      });
      if (!user)
        return res.status(400).json({
          message: "User Not Exist"
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !"
        });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error"
      });
    }
  }
);


module.exports = router