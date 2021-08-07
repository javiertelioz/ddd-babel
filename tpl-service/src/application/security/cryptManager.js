import NotImplementedException from '../../domain/exceptions/NotImplementedException';

/**
 * Interface for represent a cryptmanager.
 * @interface
 */
class CryptManager {
  /**
   * Encrypted data
   * @function
   * @name CryptManager#hash
   * @param {string|Buffer} data The data to be encrypted.
   * @param {string|number} saltOrRounds The salt to be used to hash the password.
   *  If specified as a number then a salt will be generated with
   *  the specified number of rounds and used.
   * @throws {NotImplementedException} not implements
   * @returns {string} Returns the encrypted string
   */
  hash() {
    throw new NotImplementedException();
  }

  /**
   * Check if the hash is valid
   * @function
   * @name CryptManager#compare
   * @param {string|Buffer} data The data to be encrypted.
   * @param {string|Buffer} encrypted The data to be compared against.
   * @throws {NotImplementedException} not implements
   * @returns {boolean} Comparison result true or rejected with an false
   */
  compare() {
    throw new NotImplementedException();
  }
}

export default CryptManager;
