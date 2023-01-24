const express = require("express");
const Router = express.Router();
const Admin = require("./adminSchema.js");
const Account2 = require("./Account2Schema.js");
const Account3 = require("./account3Schema.js");
const Appointment =require('./appointmentSchem.js');
const bcrypt = require("bcryptjs");
const passport = require("passport");
const {
    fetchData,
    fetchUser,
    newFetchUser,
    createElement,
    updatElement,
  } = require("./mongoose.js");
//
Router.get('/test',(req,res)=>{
    res.send('hello api')
})
Router.post('/appointment',registerClient,appointment)
 function registerClient(req,res,next){
    const data = req.body;
 
    Account3.findOne({ email: data.email }, async (err, doc) => {
        try{
        if (err) {
            res.send(err.message);
        }
        if (err) throw err;
        if (doc) {
            // res.send("this email already has an account please login to create appointment or use another email");
            throw 'This email already has an account please login to create an appointment or use another email'
        }
        if (!doc) {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            const newUser = new Account3({ ...data, password: hashedPassword });
            await newUser.save();
            next()
        } 
    }catch(e){
      console.log(e)
      res.send(e)
    }
    }); 

} 

//
//----------appointment----------
function appointment (req,res){
    const data = req.body;
    const day = data.day
    newFetchUser({day:day},Appointment)
    .then(doc=>{
        if(!doc){
            
            createElement({...data,booking:[data]},Appointment)
            .then(dd=> {if(dd.error){res.send(dd.message)}
            else{res.status(200).send('Appointment created')}
        })
        }
        if(doc){
            updatElement({day:day},{booking:[...doc.booking,data]},Appointment)
            .then(dd=>{
                if(dd.error) return res.status(500).send(dd.message)
                if(!dd.error) return res.status(200).send('Appointment created')
            })
        }
    })
}

module.exports = Router