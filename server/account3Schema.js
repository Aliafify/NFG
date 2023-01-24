const mongoose = require("mongoose");

const account3schema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true,unique:true},
    username:{type:String },
    password:{type:String ,required:true },
    date:{type:Date, default:Date.now},
    phone:String,
    country:String,
    role:{type:String,default:"client"} ,
    package:String,
    booking:{time:String,day:{type:Date},Date:{type:Date,default:new Date()}}
});
module.exports= mongoose.model("account3",account3schema)
  