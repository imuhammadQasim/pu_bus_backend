const express = require("express");
const reportRouter = express.Router();
const { reportController } = require("../controller");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");

// Public/User routes
reportRouter.post("/", authMiddleware, reportController.createReport);
reportRouter.get("/me", authMiddleware, reportController.getMyReports);

// Admin routes
reportRouter.get("/", adminMiddleware, reportController.getAllReports);
reportRouter.put("/:id", adminMiddleware, reportController.updateReportStatus);
reportRouter.delete("/:id", authMiddleware, reportController.deleteReport);

module.exports = reportRouter;
