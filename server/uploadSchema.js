const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
   username:String,personalImage:String,video:String
});
module.exports= mongoose.model("uploads",uploadSchema)
  