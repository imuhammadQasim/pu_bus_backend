const authMiddleware = require("./auth.middleware");
const APIERROR = require("../utils/api.error");

/**
 * Middleware to verify if the request is coming from an admin
 * Use this after authMiddleware if you want to reuse user data, 
 * or standalone if it handles auth itself.
 */
const adminMiddleware = [
  authMiddleware,
  (req, res, next) => {
    if (req.user && req.user.role === 'ADMIN') {
      next();
    } else {
      next(new APIERROR(403, "Access denied. Admin privileges required."));
    }
  }
];

module.exports = adminMiddleware;
