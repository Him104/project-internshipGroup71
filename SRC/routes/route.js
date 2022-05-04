const express = require('express');
const router = express.Router();
const internController=require("../controllers/internController")
const collegeController = require("../controllers/collegeController")
//--------------------------------------------------------//

router.get("/test-me", function (req, res) {
    res.send("My server is running awesome!")
})
//--------------------------------------------------------//

router.post("/functionup/colleges", collegeController.createCollege)
router.post ("/functionup/interns", internController.createIntern)
// router.get("/functionup/collegeDetails", collegeController.getBlogs)



module.exports = router;