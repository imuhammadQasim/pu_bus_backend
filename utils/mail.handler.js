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

const sendReportConfirmation = async (userEmail, reportData) => {
  try {
    const mailOptions = {
      from: `"PU Bus Service" <${config.MAILER_ENV.USER}>`,
      to: userEmail,
      subject: `Report Received: ${reportData.subject || reportData.type}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #e67e22; text-align: center;">Report Received</h2>
          <p style="font-size: 16px; color: #34495e;">Hello,</p>
          <p style="font-size: 16px; color: #34495e;">We have received your report regarding <strong>${reportData.subject || reportData.type}</strong>.</p>
          <div style="background: #fdf2e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #d35400; font-weight: bold;">Status: Pending</p>
            <p style="margin: 5px 0 0 0; color: #34495e;">${reportData.description}</p>
          </div>
          <p style="font-size: 14px; color: #7f8c8d; line-height: 1.5;">
            Please note that our team reviews reports daily. There might be a slight delay in processing your request, but rest assured we will investigate the matter thoroughly.
          </p>
          <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;">
          <p style="font-size: 12px; color: #95a5a6; text-align: center;">Thank you for helping us improve PU Bus Service.</p>
        </div>
      `,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Confirmation email failed:", error);
  }
};

const sendAdminAlert = async (reportData, userInfo) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || config.MAILER_ENV.USER;
    const mailOptions = {
      from: `"PU Bus System Alert" <${config.MAILER_ENV.USER}>`,
      to: adminEmail,
      subject: `NEW REPORT: ${reportData.priority.toUpperCase()} - ${reportData.subject || reportData.type}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #c0392b; border-radius: 10px;">
          <h2 style="color: #c0392b; text-align: center;">New Issue Reported</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>User:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${userInfo.firstName} ${userInfo.lastName} (${userInfo.email})</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Type:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${reportData.type}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Priority:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><span style="color: ${reportData.priority === 'high' ? 'red' : 'orange'}">${reportData.priority.toUpperCase()}</span></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Conductor/Bus:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${reportData.conductorName || 'N/A'} / ${reportData.busNumber || 'N/A'}</td></tr>
          </table>
          <p style="margin-top: 20px;"><strong>Description:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 5px solid #c0392b;">
            ${reportData.description}
          </div>
        </div>
      `,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Admin alert email failed:", error);
  }
};

module.exports = { sendOTP, sendReportConfirmation, sendAdminAlert };
