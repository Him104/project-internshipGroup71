
const mongoose = require('mongoose');

let collegeSchema = mongoose.Schema(
    { 
    name:{
    type: String,
    unique:true,
    required: [true, "name is a required field"],
    trim: true,
 }, 

 fullName:{
     type:String,
     required:[true,"full name is required"],
     trim:true
 }, 
 
 logoLink: {
     type:String,
     required:true,
     trim:true
 },
     isDeleted: {
         type: Boolean, 
         default: false}
         },
         {timestamps:true}

)

module.exports= mongoose.model("college",collegeSchema);