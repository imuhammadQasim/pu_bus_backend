/**
 * @description Standardized API response structure
 */
class APIRESPONSE {
  constructor(statusCode, data, message = "Success", success = true) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = success;
  }
}

module.exports = APIRESPONSE;
