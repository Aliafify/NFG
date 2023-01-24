const express = require('express') 
const Account3 =require('./account3Schema.js')
const Router =express.Router();
const bcrypt= require("bcryptjs");

Router.post("/register/student", createUser);
function createUser(req, res) {
  try {
    Account3.findOne({ email: req.body.email }, async (err, doc) => {
      if (err) throw err;
      if (err) {
        res.send(err);
        console.log(err);
      }
      if (doc) res.send("exist");

      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new Account3({ ...req.body, password: hashedPassword });
        await newUser.save();
        res.status(200);
        res.send("created");
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
}   
Router.get("/Clients/get", (req, res) =>{
  try{
    fetchData((data)=>{res.status(200).send(data)},Account3)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
})
module.exports=Router