const collegeModel = require("../models/collegeModel")

let createCollege = async function (req,res){
    let data = req.body;
    if(!data.name)
    return res.status(400).send({status:false,msg:"college name is a required field"})

    if(!data.fullName)
    return res.status(400).send({status:false,msg:"full name is a required field"})

    if(!data.logoLink)
    return res.status(400).send({status:false,msg:"logoLink is required"})

    let saveData = await collegeModel.create(data);
    res.status(201).send({ status: true, msg: saveData });

}

module.exports.createCollege=createCollege;