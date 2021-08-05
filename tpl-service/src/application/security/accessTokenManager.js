import NotImplementedException from '../../domain/exceptions/NotImplementedException';

/**
 * Interface represent a AccessTokenManager (JWT).
 * @interface
 */
class AccessTokenManager {
  /**
   * Generate jwt
   * @returns {string} JWT
   * @throws {NotImplementedException} not implements
   */
  generate() {
    throw new NotImplementedException();
  }

  /**
   * Retrieve jwt information
   * @returns {object} JWT object
   * @throws {NotImplementedException} not implements
   */
  decode() {
    throw new NotImplementedException();
  }
}

export default AccessTokenManager;
