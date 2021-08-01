/**
 * Not implemented exception
 * @class
 * @extends Error
 * @throws {NotImplementedException}
 */
class NotImplementedException extends Error {
  /**
   * Not implemented exception
   * @returns {void}
   */
  constructor() {
    super('method not implemented');
  }
}

export default NotImplementedException;
