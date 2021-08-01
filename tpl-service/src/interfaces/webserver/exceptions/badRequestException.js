import HttpException from './httpException';

/**
 * Bad request exception
 * @class
 * @classdesc class representing a bad request.
 * @extends HttpException
 */
class BadRequestException extends HttpException {
  /**
   * Bad request exception
   * @returns {void}
   */
  constructor() {
    super(404, 'bad request');
  }
}

export default BadRequestException;
