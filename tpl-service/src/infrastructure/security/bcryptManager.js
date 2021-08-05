import bcrypt from 'bcrypt';

import CryptManager from '../../application/security/cryptManager';

/**
 * Class representing a BcryptManager.
 *
 * @class
 * @classdesc
 */
class BcryptManager extends CryptManager {
  /**
   * Encrypted string
   * @param {string|Buffer} data The data to be encrypted.
   * @returns {string} Return encrypted string
   */
  hash(data) {
    return bcrypt.hashSync(data, process.env.SALT_OR_ROUNDS || 10);
  }

  /**
   * Compare hash
   * @param {string|Buffer}  plain The data to be encrypted.
   * @param {string} hashed The data to be compared against.
   * @returns {boolean} A promise to be either resolved with the comparison result salt or rejected with an Error
   */
  compare(plain, hashed) {
    return bcrypt.compareSync(plain, hashed);
  }
}

export default BcryptManager;
