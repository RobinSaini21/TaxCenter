require('dotenv/config')
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AllRoutes = require('./AllExpressRoutes/AllExpressRoutes')
const fileupload = require('express-fileupload')
const session = require('express-session');
const { cookie } = require('express-validator');




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
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  })



//   app.get("/auth", (req, res) => {
 

//     const token = req.body.token;
   
//   console.log("token",token)
//     if (token) {
   
    
//       const decode = jwt.verify(token,"randomString");
   
 
//       res.json({
//         login: true,
//         data: decode,
//       });
//     } else {
   
  
//       res.json({
//         login: false,
//         data: "error",
//       });
//     }
//   });

// app.get('/', (req, res) => {
//    return  res.send("you are in user singup")
//   })





const form16schema = require('./MongodbSchema/Form16Schema')



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


app.listen(4000,()=>{
    console.log("started")
})
