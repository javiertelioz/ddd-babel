import NotImplementedException from '../../domain/exceptions/NotImplementedException';

/**
 * Interface for represent a CryptManager.
 * @interface
 */
class CryptManager {
  /**
   * Generate a hash
   * @returns {string} JWT
   * @throws {NotImplementedException} not implements
   */
  hash() {
    throw new NotImplementedException();
  }

  /**
   * Compare hash
   * @returns {boolean} Compare hash
   * @throws {NotImplementedException} not implements
   */
  compare() {
    throw new NotImplementedException();
  }
}

export default CryptManager;
