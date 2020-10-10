/**
 * More Descriptive Error
 */
class ApiError extends Error {

  constructor(message = "Internal Server Error", httpCode = 500, ...params) {
    super(...params)
    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }

    this.message = message
    this.status = httpCode
    this.timestamp = new Date().getTime()
  }

}

module.exports = ApiError