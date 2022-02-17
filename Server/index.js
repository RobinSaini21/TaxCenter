require('dotenv/config')
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AllRoutes = require('./AllExpressRoutes/AllExpressRoutes')
const fileupload = require('express-fileupload')




const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cors());
// 
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
    file.mv(`/Users/sgs/Downloads/WorkSpace/Projects/MyITreturn/client/public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  })

app.get('/', (req, res) => {
   return  res.send("you are in user singup")
  })

app.listen(4000,()=>{
    console.log("started")
})
