const { default: mongoose } = require("mongoose");
const internModel = require("../models/internModel");
const collegeModel = require("../models/internModel")

let emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

let createIntern = async function (req,res){
    let data = req.body;
    if(!name)
    return res.status(400).send({status:false,msg:"Intern name is a required field"})

    if(!email)
    return res.status(400).send({status:false,msg:"email is a required field"})

    if (!emailRegex.test(data.email))
                return res.status(400).send({ status: false, msg: "Please provide valid email" })
const usedEmail = await internModel.findOne({email:data.email})

if(usedEmail)
return res.status(400).send({ status: false, msg: "Email Id already exists" })

if(!mobile)
return res.status(400).send({ status: false, msg: "mobile is a required field" })

let isValid = mongoose.Types.ObjectId.isValid(data.collegeId)

if (isValid == false) return res.status(400).send({ status: false, msg: "Not a valid college ID" })

let id = req.body.collegeId
let findCollegeid = await collegeModel.findById(id)
if(!findCollegeid)

return res.status(400).send({ status: false, msg: "college Not found. Please enter a valid college id." })
    
    let savedData = await internModel.create(data);
    res.status(201).send({ status: true, msg: savedData });
}

module.exports.createIntern=createIntern;