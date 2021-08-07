import NotImplementedException from '../../domain/exceptions/NotImplementedException';

/**
 * Interface represent a accesstokenmanager.
 * @interface
 */
class AccessTokenManager {
  /**
   * Synchronously sign the given payload into a JSON Web Token string
   * @function
   * @name AccessTokenManager#generate
   * @param {string|object} payload Payload to sign, could be an literal, buffer or string
   * @throws {NotImplementedException} Not implements
   * @returns {string} The JSON Web Token string
   */
  generate() {
    throw new NotImplementedException();
  }

  /**
   * Verify given token using a secret or a public key to get a decoded token
   * @function
   * @name AccessTokenManager#decode
   * @param {string} token JWT string to verify
   * @throws {NotImplementedException} Not implements
   * @returns {object|string} The decoded token
   */
  decode() {
    throw new NotImplementedException();
  }
}

export default AccessTokenManager;
