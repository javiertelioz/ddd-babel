/**
 * Not implemented exception
 * @class
 * @extends Error
 *
 * @module domain/exceptions/NotUndefinedOrNullException
 *
 * @example <caption>Example usage of NotUndefinedOrNullException.</caption>
 * throw new NotUndefinedOrNullException();
 */
class NotUndefinedOrNullException extends Error {
  /**
   * Not implemented exception
   * @returns {void}
   */
  constructor() {
    super('expect data to be not undefined or null');
  }
}

export default NotUndefinedOrNullException;
