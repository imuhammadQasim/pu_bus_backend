const express = require("express");
const { signup, verifyOTP, signin } = require("../controller/auth.controller");
const router = express.Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOTP);
router.post("/signin", signin);

module.exports = router;
