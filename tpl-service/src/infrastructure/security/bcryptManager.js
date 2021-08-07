import bcrypt from 'bcrypt';

import CryptManager from '../../application/security/cryptManager';

/**
 * Class representing a BcryptManager.
 *
 * @class
 * @classdesc
 * @augments CryptManager
 */
class BcryptManager extends CryptManager {
  /**
   * Encrypted data
   * @function
   * @implements {CryptManager#hash}
   * @param {string|Buffer} data The data to be encrypted.
   * @param {string|number} [saltOrRounds=10] The salt to be used to hash the password.
   * If specified as a number then a salt will be generated with the specified number of rounds and used.
   * @returns {string} Returns the encrypted string
   */
  hash(data, saltOrRounds = 10) {
    return bcrypt.hashSync(data, process.env.SALT_OR_ROUNDS || saltOrRounds);
  }

  /**
   * Check if the hash is valid
   * @function
   * @implements {CryptManager#compare}
   * @param {string|Buffer} plain The data to be encrypted.
   * @param {string} hashed The data to be compared against.
   * @returns {boolean} Comparison result true or rejected with an false
   */
  compare(plain, hashed) {
    return bcrypt.compareSync(plain, hashed);
  }
}

export default BcryptManager;
