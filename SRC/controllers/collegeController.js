const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")

let createCollege = async function (req,res){
    try{
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

catch (err){
    return res.status(500).send({status:false,msg:err.msg})
}
}

// get college details

const collegeDetails = async function(req,res){
 try{

    if(req.query.collegeName){
    let college = await collegeModel.findOne({name:req.query.collegeName,isDeleted:false})

    if(!college){

    return res.status(404).send({ status: false, message: "No such college found" })
    }

    else{
        let collegeData = {
            name:college.name,
            fullName:college.fullName,
            logoLink:college.logoLink
        }
let interns = await internModel.findOne({collegeId:college._id, isDeleted:false})

if (interns)
{
collegeData.interns = interns
    }
res.status(201).send({ status: true, data: collegeData })
    }
}
else{
    res.status(400).send({status:false,msg:"college name must be present"})
}


}
catch (err){
    return res.status(500).send({status:false,msg:err.msg})

}
}
module.exports.collegeDetails=collegeDetails;
module.exports.createCollege=createCollege;