const express = require("express");
const { signup, verifyOTP, signin, getMe } = require("../controller/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOTP);
router.post("/signin", signin);
router.get("/me", authMiddleware, getMe);

module.exports = router;
