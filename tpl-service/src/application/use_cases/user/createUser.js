import { User } from '../../../domain/entities/user';

/**
 * Create new user
 * @function
 * @async
 * @module application/use_cases/user/CreateUser
 * @param {Object} payload - Request payload
 * @param {string} payload.firstName User firstName
 * @param {string} payload.lastName User lastName
 * @param {string} payload.email User email
 * @param {string} payload.password User password
 * @param {Object} dependencies - Dependencies
 * @param {function} dependencies.userRepository - User Repository.
 * @param {function} dependencies.bcryptManager - Bcrypt Manager.
 * @throws {Error} User already exists, check that it is not disabled
 * @returns {Promise<User>} User entity
 * @example <caption>Example usage of CreateUser.</caption>
 * CreateUser({
 *     firstName: "joe",
 *     lastName: "doe",
 *     email: "joe@mail.com",
 *     password: "doe_2021",
 *  },
 *  {
 *     userRepository,
 *     bcryptManager
 * });
 */
async function CreateUser({ firstName, lastName, email, password }, { userRepository, bcryptManager }) {
  const exists = await userRepository.getByEmail(email);

  if (exists) {
    throw new Error('user already exists, check that it is not disabled');
  }

  const hashedPassword = bcryptManager.hash(password);

  const user = new User(null, firstName, lastName, email, hashedPassword);

  return userRepository.persist(user);
}

export { CreateUser };
