
const mongoose = require('mongoose');

let collegeSchema = mongoose.Schema(
    { 
    name:{
    type: String,
    unique:true,
    required: true,
    trim: true,
 }, 

 fullName:{
     type:String,
     required:true,
 }, 
 
 logoLink: {
     type:String,
     required:true,
 },
     isDeleted: {
         type:boolean, 
         default: false}
         },
         {timestamps:true}

)

module.exports= mongoose.model("college",collegeSchema);