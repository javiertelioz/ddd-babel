import NotImplementedException from '../../domain/exceptions/NotImplementedException';

/**
 * Interface for classes that represent a AccessTokenManager (JWT).
 * @interface
 */
export class AccessTokenManager {
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
