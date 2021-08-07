import { User } from '../../../domain/entities/user';

/**
 * Update new user
 * @function
 * @async
 * @module application/use_cases/user/UpdateUser
 * @param {string|number} id User id
 * @param {Object} payload - Request payload
 * @param {string} payload.firstName User firstName
 * @param {string} payload.lastName User lastName
 * @param {string} payload.email User email
 * @param {string} payload.gender User gender
 * @param {Object} dependencies - Dependencies
 * @param {function} dependencies.userRepository - User Repository.
 * @throws {EntityException} Entity not found
 * @returns {Promise<User>} User entity
 * @example <caption>Example 1 usage of UpdateUser.</caption>
 * UpdateUser(123, {
 *     firstName: "joe",
 *     lastName: "doe",
 *     email: "joe@mail.com",
 *     gender: "male",
 *  },
 *  {
 *     userRepository
 * });
 * @example <caption>Example 2 usage of UpdateUser.</caption>
 * UpdateUser(610ecb6c694e4e006dc0622f, {
 *     firstName: "joe",
 *     lastName: "doe",
 *     email: "joe@mail.com",
 *     gender: "male",
 *  },
 *  {
 *     userRepository
 * });
 */
async function UpdateUser(id, { firstName, lastName, email, gender }, { userRepository }) {
  const exists = await userRepository.get(id);

  if (!exists) {
    throw new Error('entity not found');
  }

  const user = new User(id, firstName, lastName, email, null, null, null, gender);

  return await userRepository.merge(user);
}

export { UpdateUser };
