/**
 * @description Standardized API response structure
 */
class ApiResponse {
  constructor(statusCode, data, message = "Success", success = true) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = success;
  }
}

module.exports = ApiResponse;
