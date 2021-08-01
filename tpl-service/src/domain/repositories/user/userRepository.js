import NotImplementedException from '../../exceptions/NotImplementedException';

/**
 * Class representing a user repository interface.
 * @interface
 */
class UserRepository {
  /**
   * Create user
   * @param {object} entity Entity
   * @throws {NotImplementedException}
   * @returns {object} User entity
   */
  persist() {
    throw new NotImplementedException();
  }

  /**
   * Update user
   * @param {object} entity Entity
   * @throws {NotImplementedException}
   * @returns {boolean|object} User entity if is success or false
   */
  merge() {
    throw new NotImplementedException();
  }

  /**
   * Delete user
   * @param {string|number} id  Entity id
   * @throws {NotImplementedException}
   * @returns {boolean} User entity is delete
   */
  remove() {
    throw new NotImplementedException();
  }

  /**
   * Retrieves a user by id
   * @param {string|number} id Entity id
   * @throws {NotImplementedException}
   * @returns {boolean|object} User entity if is success or false
   */
  get() {
    throw new NotImplementedException();
  }

  /**
   * Retrieves a user by email
   * @param {string} email User email eg. joe
   * @throws {NotImplementedException}
   * @returns {boolean|object} User entity if is success or false
   */
  getByEmail() {
    throw new NotImplementedException();
  }

  /**
   * Retrieve all users
   * @throws {NotImplementedException}
   * @returns {array} User entities
   */
  find() {
    throw new NotImplementedException();
  }
}

export default UserRepository;
