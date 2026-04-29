const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../database/prisma");
const config = require("../config/env");
const asyncHandler = require("../utils/async.handler");
const APIRESPONSE = require("../utils/api.response");
const APIERROR = require("../utils/api.error");
const { sendOTP } = require("../utils/mail.handler");

const signup = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName, phoneNumber } = req.body;

  // Validate email domain
  if (!email.endsWith("@pu.edu.pk")) {
    throw new APIERROR(
      400,
      "Only University of the Punjab email addresses (@pu.edu.pk) are allowed.",
    );
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser && existingUser.isVerified) {
    throw new APIERROR(409, "User already exists with this email.");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  // Send OTP email
  const emailSent = await sendOTP(email, otp);
  if (!emailSent) {
    throw new APIERROR(
      500,
      "Failed to send verification email. Please try again later.",
    );
  }

  if (existingUser) {
    // Update existing unverified user
    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
        otp,
        otpExpires,
      },
    });
  } else {
    // Create new unverified user
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
        otp,
        otpExpires,
      },
    });
  }

  return res
    .status(201)
    .json(
      new APIRESPONSE(
        201,
        null,
        "OTP sent successfully to your university email.",
      ),
    );
});

const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new APIERROR(404, "User not found.");
  }

  if (user.isVerified) {
    throw new APIERROR(400, "User is already verified.");
  }

  if (user.otp !== otp || user.otpExpires < new Date()) {
    throw new APIERROR(400, "Invalid or expired OTP.");
  }

  // Mark user as verified
  const verifiedUser = await prisma.user.update({
    where: { email },
    data: {
      isVerified: true,
      otp: null,
      otpExpires: null,
    },
  });

  // Generate JWT
  const token = jwt.sign(
    { id: verifiedUser.id, email: verifiedUser.email },
    config.SECURITY.JWT_SECRET,
    { expiresIn: config.SECURITY.JWT_EXPIRES_IN },
  );

  const { password, ...userData } = verifiedUser;

  return res
    .status(200)
    .json(
      new APIRESPONSE(
        200,
        { user: userData, token },
        "Account verified successfully.",
      ),
    );
});

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.isVerified) {
    throw new APIERROR(401, "Invalid email or password.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new APIERROR(401, "Invalid email or password.");
  }

  // Generate JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    config.SECURITY.JWT_SECRET,
    { expiresIn: config.SECURITY.JWT_EXPIRES_IN },
  );

  const { password: _, ...userData } = user;

  return res
    .status(200)
    .json(
      new APIRESPONSE(
        200,
        { user: userData, token },
        "Logged in successfully.",
      ),
    );
});

const getMe = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new APIRESPONSE(
        200,
        { user: req.user },
        "User details fetched successfully.",
      ),
    );
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Validate email domain
  if (!email.endsWith("@pu.edu.pk")) {
    throw new APIERROR(
      400,
      "Only University of the Punjab email addresses (@pu.edu.pk) are allowed.",
    );
  }

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.isVerified) {
    throw new APIERROR(
      404,
      "No verified account found with this email address.",
    );
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  // Send OTP email
  const emailSent = await sendOTP(email, otp);
  if (!emailSent) {
    throw new APIERROR(
      500,
      "Failed to send reset email. Please try again later.",
    );
  }

  // Update user with OTP
  await prisma.user.update({
    where: { email },
    data: {
      otp,
      otpExpires,
    },
  });

  return res
    .status(200)
    .json(
      new APIRESPONSE(
        200,
        null,
        "Password reset OTP sent successfully to your university email.",
      ),
    );
});

const resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, password } = req.body;

  // Find the user
  const user = await prisma.user.findUnique({
    where: { email },
  });

  // Verify user exists
  if (!user) {
    throw new APIERROR(404, "User not found.");
  }

  // Check if OTP is valid and not expired
  if (user.otp !== otp || user.otpExpires < new Date()) {
    throw new APIERROR(400, "Invalid or expired OTP.");
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update user's password and clear OTP
  await prisma.user.update({
    where: { email },
    data: {
      password: hashedPassword,
      otp: null,
      otpExpires: null,
    },
  });

  return res
    .status(200)
    .json(
      new APIRESPONSE(
        200,
        null,
        "Password has been reset successfully. You can now login with your new password.",
      ),
    );
});

module.exports = {
  signup,
  verifyOTP,
  signin,
  getMe,
  forgotPassword,
  resetPassword,
};
