const nodemailer = require("nodemailer");
const config = require("../config/env");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.MAILER_ENV.USER,
    pass: config.MAILER_ENV.PASS,
  },
});

const sendOTP = async (email, otp) => {
  try {
    const mailOptions = {
      from: `"PU Bus Service" <${config.MAILER_ENV.USER}>`,
      to: email,
      subject: "Your OTP for PU Bus Service Registration",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #2c3e50; text-align: center;">Welcome to PU Bus Service</h2>
          <p style="font-size: 16px; color: #34495e;">Hello,</p>
          <p style="font-size: 16px; color: #34495e;">Your verification code for signing up is:</p>
          <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 32px; font-weight: bold; color: #2980b9; letter-spacing: 5px; background: #f4f7f6; padding: 10px 20px; border-radius: 5px;">${otp}</span>
          </div>
          <p style="font-size: 14px; color: #7f8c8d;">This code will expire in 10 minutes.</p>
          <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;">
          <p style="font-size: 12px; color: #95a5a6; text-align: center;">If you didn't request this, please ignore this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};

module.exports = { sendOTP };
