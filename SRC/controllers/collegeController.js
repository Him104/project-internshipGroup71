const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")

let createCollege = async function (req,res){
    let data = req.body;
    if(!data.name)
    return res.status(404).send({status:false,msg:"college name is a required field"})

    if(!data.fullName)
    return res.status(404).send({status:false,msg:"full name is a required field"})

    if(!data.logoLink)
    return res.status(404).send({status:false,msg:"logoLink is required"})

    let saveData = await collegeModel.create(data);
    res.status(201).send({ status: true, msg: saveData });

}

// get college details

const collegeDetails = async function(req,res){

    let userQuery  = req.query

    if(!userQuery)
    return res.status(400).send({ status: false, message: "No college entered in input field." })

    const collegeName = req.query.collegeName
    const getCollegeName = await collegeModel.find({name:collegeName,isDeleted:false})

    if(!getCollegeName)

    return res.status(404).send({ status: false, message: "No such college found" })

    const getCollegeId = getCollegeName._id;


const findIntern = await internModel.find({collegeId:getCollegeId, isDeleted:false}).select({name:1,email:1,mobile:1})

const allInterns ={
    name:getCollegeName.name,
    fullName:getCollegeName.fullName,
    logoLink:getCollegeName.logoLink,
    interests: findIntern
}
res.status(200).send({ status: true, data: allInterns })
    

}

module.exports.collegeDetails=collegeDetails;
module.exports.createCollege=createCollege;