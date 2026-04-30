const jwt = require("jsonwebtoken");
const config = require("../config/env");
const APIERROR = require("../utils/api.error");
const asyncHandler = require("../utils/async.handler");
const prisma = require("../database/prisma");

const authMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
    throw new APIERROR(401, "No token provided, authorization denied.");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.SECURITY.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        isVerified: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new APIERROR(404, "User not found.");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);

    if (error instanceof APIERROR) {
      throw error;
    }

    if (error.name === "TokenExpiredError") {
      throw new APIERROR(401, "Token expired, please login again.");
    }

    if (error.name === "JsonWebTokenError") {
      throw new APIERROR(401, "Invalid token.");
    }

    throw new APIERROR(
      500,
      error.message || "Internal server error in authentication.",
    );
  }
});

module.exports = authMiddleware;
