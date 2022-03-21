const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const mserSchema = new mongoose.Schema({
  name: String,
  email: String,
  Token: String,
  googleId: String,
});

const User = new mongoose.model("UserGoogleDetails ", mserSchema);
router.post("/Googleuser", (req, res) => {
  console.log(req.body);
  const { useremail, googleId, name } = req.body;
  User.findOne({ email: useremail }, (err, user) => {
    if (user) {
      const payload = {
        user: {
          user: user._id,
        },
      };
      const token = jwt.sign(payload, "thisismysecret", {
        expiresIn: "12h",
      });
     const fulldata = {
        name: user.name,
        googleId: user.googleId,
        email: user.email,
        token: token,
        userId: user._id
     }
     res.send({fulldata})
    } else {
      const user = new User({
        name: name,
        email: useremail,
        Token: "thisismysecret",
        googleId,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          const payload = {
            user: {
              user: user._id,
            },
          };
          const token = jwt.sign(payload, "thisismysecret", {
            expiresIn: "12hr",
          });

          const fulldata = {
            name: name,
            googleId: googleId,
            email: useremail,
            token: token,
          };
          res.send({ fulldata });
        }
      });
    }
  });
});

module.exports = router;
