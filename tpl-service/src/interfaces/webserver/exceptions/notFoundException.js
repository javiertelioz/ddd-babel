import HttpException from './httpException';

/**
 * Not Found Exception
 * @class
 * @classdesc Class representing a not found resource.
 * @extends HttpException
 *
 * @namespace Exceptions/NotFoundException
 */
class NotFoundException extends HttpException {
  /**
   * Not found exception
   *
   * @memberof Exceptions/NotFoundException
   * @returns {void}
   */
  constructor() {
    super(404, 'not found', {
      message: 'You reached a route that is not defined on this server',
    });
  }
}

export default NotFoundException;
