const prisma = require("../database/prisma");
const asyncHandler = require("../utils/async.handler");
const APIRESPONSE = require("../utils/api.response");
const APIERROR = require("../utils/api.error");
const { sendReportConfirmation, sendAdminAlert } = require("../utils/mail.handler");

/**
 * @desc Get all reports (Admin only)
 * @route GET /api/reports
 */
const getAllReports = asyncHandler(async (req, res) => {
  const { status, routeId } = req.query;

  const where = {};
  if (status) where.status = status;
  if (routeId) where.routeId = routeId;

  const reports = await prisma.report.findMany({
    where,
    include: {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phoneNumber: true,
        },
      },
      route: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res
    .status(200)
    .json(
      new APIRESPONSE(
        200,
        { reports, count: reports.length },
        "Reports fetched successfully"
      )
    );
});

/**
 * @desc Create a new report
 * @route POST /api/reports
 */
const createReport = asyncHandler(async (req, res) => {
  const { type, subject, conductorName, busNumber, description, priority, routeId } = req.body;
  const user = req.user; // Full user object from authMiddleware

  if (!description) {
    throw new APIERROR(400, "Description is required");
  }

  if (!user) {
    throw new APIERROR(401, "User must be logged in to report");
  }

  const newReport = await prisma.report.create({
    data: {
      type: type || "other",
      subject,
      conductorName,
      busNumber,
      description,
      priority: priority || "medium",
      routeId,
      userId: user.id,
    },
    include: {
      route: true,
      user: true,
    },
  });

  // Background email notifications
  sendReportConfirmation(user.email, newReport).catch(err => console.error("Confirmation email background error:", err));
  sendAdminAlert(newReport, user).catch(err => console.error("Admin alert background error:", err));

  return res
    .status(201)
    .json(new APIRESPONSE(201, newReport, "Report submitted successfully to admin. A confirmation email has been sent."));
});

/**
 * @desc Update report status (Admin only)
 * @route PUT /api/reports/:id
 */
const updateReportStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const report = await prisma.report.findUnique({
    where: { id },
  });

  if (!report) {
    throw new APIERROR(404, "Report not found");
  }

  const updatedReport = await prisma.report.update({
    where: { id },
    data: {
      status: status || report.status,
    },
  });

  return res
    .status(200)
    .json(new APIRESPONSE(200, updatedReport, "Report status updated successfully"));
});

/**
 * @desc Delete a report (User or Admin)
 * @route DELETE /api/reports/:id
 */
const deleteReport = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user?.id;
  const userRole = req.user?.role; // Assuming role is attached for admins

  const report = await prisma.report.findUnique({
    where: { id },
  });

  if (!report) {
    throw new APIERROR(404, "Report not found");
  }

  // Allow deletion if user is the owner OR user is an admin
  if (report.userId !== userId && req.user?.role !== 'ADMIN') {
     throw new APIERROR(403, "You are not authorized to delete this report");
  }

  await prisma.report.delete({
    where: { id },
  });

  return res
    .status(200)
    .json(new APIRESPONSE(200, null, "Report deleted successfully"));
});

/**
 * @desc Get reports for the logged-in user
 * @route GET /api/reports/me
 */
const getMyReports = asyncHandler(async (req, res) => {
  const userId = req.user?.id;

  if (!userId) {
    throw new APIERROR(401, "User must be logged in");
  }

  const reports = await prisma.report.findMany({
    where: { userId },
    include: {
      route: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res
    .status(200)
    .json(
      new APIRESPONSE(
        200,
        { reports, count: reports.length },
        "User reports fetched successfully"
      )
    );
});

module.exports = {
  getAllReports,
  createReport,
  updateReportStatus,
  deleteReport,
  getMyReports,
};
