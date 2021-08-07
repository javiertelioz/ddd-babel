/**
 * Not implemented exception
 * @class
 * @extends Error
 * @throws {NotImplementedException}
 *
 * @module domain/exceptions/NotImplementedException
 *
 * @example <caption>Example usage of NotImplementedException.</caption>
 * throw new NotImplementedException();
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
