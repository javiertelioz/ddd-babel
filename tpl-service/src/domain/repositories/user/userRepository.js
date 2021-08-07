import NotImplementedException from '../../exceptions/NotImplementedException';

/**
 * Class representing a user repository interface.
 * @interface
 */
class UserRepository {
  /**
   * Create user
   * @async
   * @function
   * @name UserRepository#persist
   * @param {object} entity Entity
   * @throws {NotImplementedException}
   * @returns {Promise<Object>} User entity
   */
  persist() {
    throw new NotImplementedException();
  }

  /**
   * Update user
   * @async
   * @function
   * @name UserRepository#merge
   * @param {object} entity Entity
   * @throws {NotImplementedException}
   * @returns {Promise<Object|boolean>} Returns the user entity if the user
   * exists and the transaction is successful or false otherwise
   */
  merge() {
    throw new NotImplementedException();
  }

  /**
   * Delete user
   * @async
   * @function
   * @name UserRepository#remove
   * @param {string|number} id  Entity id
   * @throws {NotImplementedException}
   * @returns {Promise<boolean>} User entity is delete
   */
  remove() {
    throw new NotImplementedException();
  }

  /**
   * Retrieves a user by id
   * @async
   * @function
   * @name UserRepository#get
   * @param {string|number} id Entity id
   * @throws {NotImplementedException}
   * @returns {Promise<Object|boolean>} Returns the user entity if the user
   * exists and the transaction is successful or false otherwise
   */
  get() {
    throw new NotImplementedException();
  }

  /**
   * Retrieves a user by email
   * @async
   * @function
   * @name UserRepository#getByEmail
   * @param {string} email User email eg. joe
   * @throws {NotImplementedException}
   * @returns {Promise<Object|boolean>} Returns the user entity if the user
   * exists and the transaction is successful or false otherwise
   */
  getByEmail() {
    throw new NotImplementedException();
  }

  /**
   * Retrieve all users
   * @async
   * @function
   * @name UserRepository#find
   * @throws {NotImplementedException}
   * @returns {Promise<Array>} User entities
   */
  find() {
    throw new NotImplementedException();
  }
}

export default UserRepository;
