const config = require("../config/env");
const ApiError = require("../utils/ApiError");

const errorHandler = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    error = new ApiError(statusCode, message, [], err.stack);
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
