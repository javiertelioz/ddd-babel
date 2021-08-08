/**
 * Http exception
 * @class
 * @classdesc Class representing a interface for http errors.
 * @extends Error
 *
 * @namespace Exceptions/HttpException
 */
class HttpException extends Error {
  /**
   * Http Exception
   *
   * @memberof Exceptions/HttpException
   * @param {number} status status code
   * @param {string} message message
   * @param {object|array|null} errors errors
   * @returns {void}
   */
  constructor(status, message, errors = null) {
    super(message);

    this.status = status;
    this.message = message;
    this.errors = errors;
  }
}

export default HttpException;
