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

    // Our register logic starts here
    try {
      // Get user input
      const {  email, password } = req.body;
  
      // Validate user input
      if (!(email && password )) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
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
  const data = {
    user: user,
    token: token
  }
      // return new user
      res.status(201).json([data]);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  


//LOGIN LOGIN LOGIN LOGIN


// router.get("/Login", (req, res) => {
//     res.send("your in LOGIN")
// });


// router.post("/Login", (req, res) => {
//     // jwt.sign(
//     //     payload,
//     //     "randomString", {
//     //         expiresIn: 10000
//     //     },
//     //     (err, token) => {
//     //         if (err) throw err;
//     //         res.status(200).json({
//     //             token
//     //         });
//     //     }
//     // );
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
//     // const payload = {
//     //     user: {
//     //         id: User.id
//     //     }
//     // };
//     // jwt.sign(
//     //     payload,
//     //     "randomString", {
//     //         expiresIn: 10000
//     //     },
//     //     (err, token) => {
//     //         if (err) throw err;
//     //        return res.status(200).json({
//     //             token
//     //         });
//     //     }
//     // );

// })
// router.post("/Login", (req, res) => {
//     // jwt.sign(
//     //     payload,
//     //     "randomString", {
//     //         expiresIn: 10000
//     //     },
//     //     (err, token) => {
//     //         if (err) throw err;
//     //         res.status(200).json({
//     //             token
//     //         });
//     //     }
//     // );
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




// router.post(
//   "/Login",
//   [
//     check("email", "Please enter a valid email").isEmail(),
//     check("password", "Please enter a valid password").isLength({
//       min: 6
//     })
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         errors: errors.array()
//       });
//     }

//     const { email, password } = req.body;
//     try {
//       let user = await User.findOne({
//         email
//       });
//       if (!user)
//         return res.status(400).json({
//           message: "User Not Exist"
//         });

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch)
//         return res.status(400).json({
//           message: "Incorrect Password !"
//         });

//       const payload = {
//         user: {
//           id: user.id
//         }
//       };

//       jwt.sign(
//         payload,
//         "randomString",
//         {
//           expiresIn: 3600
//         },
//         (err, token) => {
//           if (err) throw err;
//           res.status(200).json({
//             token
//           });
//         }
//       );
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: "Server Error"
//       });
//     }
//   }
// );

module.exports = router;