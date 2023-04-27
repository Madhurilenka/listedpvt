const router = require("express").Router();
const { gmailauth } = require("../controller/gmailcontroller");

router.post("/user", gmailauth);

module.exports = router;