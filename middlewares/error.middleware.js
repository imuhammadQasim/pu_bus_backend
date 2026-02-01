const config = require("../config/env");
const APIERROR = require("../utils/api.error");

const errorHandler = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof APIERROR)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    error = new APIERROR(statusCode, message, [], err.stack);
  }

  const response = {
    success: false,
    message: error.message,
    ...(config.NODE_ENV === "development" ? { stack: error.stack } : {}),
    errors: error.errors,
  };

  res.status(error.statusCode).json(response);
};

module.exports = errorHandler;
