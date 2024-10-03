/**
 * Sends a response to the client.
 *
 * @param res - The response object.
 * @param message - The message to send.
 * @param success - The status of the response.
 * @param statusCode - The status code of the response.
 * @param data - The data to send.
 */
const _response = (res, message, success, statusCode, data) => {
  if (success) {
    res.status(statusCode).json({ success, message, data });
  } else {
    let error = message;
    if (typeof message === "string") {
      error = [{ message }];
    }
    res.status(statusCode).json({
      success,
      message: "An error encountered",
      data: data ? data : {},
      error,
    });
  }
};

module.exports = _response;
