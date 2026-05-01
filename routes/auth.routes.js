const express = require("express");
const {
  signup,
  verifyOTP,
  signin,
  getMe,
  forgotPassword,
  resetPassword,
  getAllUsers,
} = require("../controller/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOTP);
router.post("/signin", signin);
router.get("/me", authMiddleware, getMe);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/get-all-users",adminMiddleware, getAllUsers);

module.exports = router;
