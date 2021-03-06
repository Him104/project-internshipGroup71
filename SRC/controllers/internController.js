const { default: mongoose } = require("mongoose");
const internModel = require("../models/internModel");
const collegeModel = require("../models/collegeModel")

let emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

let createIntern = async function (req,res){
    let data = req.body;
    if(!data.name)
    return res.status(404).send({status:false,msg:"Intern name is a required field"})

    if(!data.email)
    return res.status(404).send({status:false,msg:"email is a required field"})

    if (!emailRegex.test(data.email))
                return res.status(404).send({ status: false, msg: "Please provide valid email" })
const usedEmail = await internModel.findOne({email:data.email})

if(usedEmail)
return res.status(404).send({ status: false, msg: "Email Id already exists" })

if(!data.mobile)
return res.status(404).send({ status: false, msg: "mobile is a required field" })

let id = req.body.collegeId
let findCollegeId = await collegeModel.findById(id)
if(!findCollegeId)

return res.status(404).send({ status: false, msg: "college Not found. Please enter a valid college id." })

let isValid = mongoose.Types.ObjectId.isValid(data.collegeId)

console.log(isValid  );

if (isValid == false) return res.status(404).send({ status: false, msg: "Not a valid college ID" })


    
    let savedData = await internModel.create(data);
    res.status(201).send({ status: true, msg: savedData });
}


module.exports.createIntern=createIntern;