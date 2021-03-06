const express = require('express');
const router = express.Router();
const internController=require("../controllers/internController")
const collegeController = require("../controllers/collegeController")
//--------------------------------------------------------//

router.get("/test-me", function (req, res) {
    res.send("server is up and running on 3000")
})
//--------------------------------------------------------//

router.post("/functionup/colleges", collegeController.createCollege)
router.post ("/functionup/interns", internController.createIntern)
router.get("/functionup/collegeDetails", collegeController.collegeDetails)


module.exports = router;