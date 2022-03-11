  require('dotenv/config')
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AllRoutes = require('./AllExpressRoutes/AllExpressRoutes')
const fileupload = require('express-fileupload')
const session = require('express-session');
const fs = require('fs')
const pdfpasre = require('pdf-parse')
const readline = require('readline')
 const mserSchema = require('./MongodbSchema/RegisterSchema');
 var MongoClient = require('mongodb').MongoClient;
 const userbasicSchema = require('./MongodbSchema/BasicdetailSchema')
const User = new mongoose.model("User", mserSchema)
const jwt = require("jsonwebtoken");
const form16schema = require('./MongodbSchema/Form16Schema');
const Basicdata = new mongoose.model("USERDETAILS", userbasicSchema)
const config = process.env;




const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cors());
app.set('trust proxy', 1)
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 365 * 1000
  }
}))


app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
  }
  else {
    req.session.views = 1;
  }
  res.send(`${req.session.views} views`);
})
app.use(AllRoutes);


const mongodbURL = process.env.CONNECT_DB

mongoose.connect(mongodbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});()=>{
    console.log("connected to DB")
}
app.use(fileupload())
app.post('/upload', (req, res) => {

    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;
  console.log(file)
    file.mv(`/Users/sgs/Downloads/WorkSpace/Projects/MyITreturn/server/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      const pdffile = fs.readFileSync(`/Users/sgs/Downloads/WorkSpace/Projects/MyITreturn/server/uploads/${file.name}`)
      pdfpasre(pdffile).then(function(data){
       console.log(data.text)
       const interface = readline.createInterface({
         input: fs.createReadStream(`/Users/sgs/Downloads/WorkSpace/Projects/MyITreturn/server/uploads/${file.name}`)
       })
       var lineno = 0;
       const linedata = data.text

       interface.on('line',() =>{
        lineno++;
        console.log()
        let linearr = Array('Line number ' + lineno + ':' + data)
        // console.log(linearr[90])
        // console.log(linearr[0])
        // console.log(lineno)
        // console.log(lineno[90])
       })

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` , msg: "File is uploaded", data: data.text});
          })


    });
  })









app.get( "/verfiy" ,authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token,"thisismysecret" , (err, user) => {
          if (err) {
              return res.sendStatus(403);
          } else{
            return res.json(user)
            req.user = user;
            console.log(req.user)

            next();
          }


      });
  } else {
      res.sendStatus(401);
  }
})


const userform16data = new mongoose.model("form16Data", form16schema)
app.post("/form16data",(req,res)=>{

    const {   pan,
        finacialyear,
        regimetype,
        tanofemploye,
        organisation,
        typeoforganisation,
        salarysec171,
        salarysec172,
        lieusalarysec173,
        grossalary,
        allowancessectio,
        balance,
        standarDeduction,
        professionaltax,
        incomefromsalary,
        incomeonhouse,
        incomeothersource,
        c80,
        ccc80,
        ccd80,
        ccd801b,
        ccc80companycontriion,
        d80,
        dd80,
        ddb80,
        e80,
        ee80,
        u80,
        g80,
        gg80,
        tta80,
        totaldeduciton,
        reliefus89,
        totaltaxdeducted}  = req.body;
    const user = new userform16data({   pan,
        finacialyear,
        regimetype,
        tanofemploye,
        organisation,
        typeoforganisation,
        salarysec171,
        salarysec172,
        lieusalarysec173,
        grossalary,
        allowancessectio,
        balance,
        standarDeduction,
        professionaltax,
        incomefromsalary,
        incomeonhouse,
        incomeothersource,
        c80,
        ccc80,
        ccd80,
        ccd801b,
        ccc80companycontriion,
        d80,
        dd80,
        ddb80,
        e80,
        ee80,
        u80,
        g80,
        gg80,
        tta80,
        totaldeduciton,
        reliefus89,
        totaltaxdeducted})
  console.log(user)
    user.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"sucessfull"})
        }
    })
})
const object = "620e1c387934d910f8df2d03"
var ObjectId = mongoose.Types.ObjectId
app.get("/mynew",function(req,res){
  MongoClient.connect(mongodbURL, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("users").findOne({_id: ObjectId(`${object}`)}, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
    dbo.collection("users").find({}, { projection: { _id: 1, email: 1,}}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      res.send(result)
      db.close();
    });
  });
})
// var ObjectId = mongoose.Types.ObjectId
// console.log(ObjectId)
// MongoClient.connect(mongodbURL, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var myobj = { user:{
// User
//   }
// , otherInfo:{
// UserBasicData
// }
// };
//   dbo.collection("users").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

//userdetails
//users

//  const client = await MongoClient.connect('mongodb://localhost:27017/test');

// app.post('/getprofile',(res,req) =>{
//   const userDb_Id = req.body.userDb_Id
//   console.log(userDb_Id)
//   res.send({message:"sucessfull"})
// })
// const ObjectId =  mongoose.Schema.Types.ObjectId
  app.get( '/getprofile' ,authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
  console.log(authHeader)
  Basicdata.findOne({user: ObjectId(authHeader)}).exec((err,result) =>{
    if (err) throw err
    else
    res.send(result)
    console.log(result)
  });
  })





const  run= async () => {
  const Uprofile =  User.findById({_id: "622878bd05239a8e5c50daa4"}).exec((err,result) =>{
    if (err) throw err
    // else
    // console.log(result)
  });

const basic =  Basicdata.findOne({user:"622878bd05239a8e5c50daa4"}).exec((err,result) =>{
  if (err) throw err
  // else
  // console.log(result)
});
var ObjectId = mongoose.Types.ObjectId
const u_id = "62287c1a447b5e86cac92846"
 const docs  = Basicdata.aggregate([


{


  $lookup:{
    from: "users",
    as: 'profile',
    let: {userID: '$user'},

    pipeline: [
      {$match:  {$expr:{$eq:['$_id','$$userID',]}}}
    ]
  },

},
{
  $unwind: '$profile'
},
{
  $project: {
    User_id: "$profile._id",
    user: 1,
    _id: 1,
    email: 1,
    pan: 1,
    aadharnum: 1,
    LoginEmail: '$profile.email'
  }
},



]).exec((err,result) =>{
  if(err){
    console.log(err)
  }
  else{
     console.log(result)

  }
} )
}

// run()

app.listen(4000,()=>{
    console.log("started")
})
