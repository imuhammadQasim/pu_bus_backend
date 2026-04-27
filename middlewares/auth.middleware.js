const jwt = require("jsonwebtoken");
const config = require("../config/env");
const APIERROR = require("../utils/api.error");
const asyncHandler = require("../utils/async.handler");
const prisma = require("../database/prisma");

const authMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
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
        createdAt: true,
      },
    });

    if (!user) {
      throw new APIERROR(404, "User not found.");
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new APIERROR(401, "Token expired, please login again.");
    }
    throw new APIERROR(401, "Invalid token.");
  }
});

module.exports = authMiddleware;
