/**
 * Retrieve user by id
 * @function
 * @async
 * @module application/use_cases/user/GetUser
 * @param {string|number} id User id
 * @param {Object} dependencies - Dependencies
 * @param {function} dependencies.userRepository - User Repository.
 * @throws {Error} Entity not found
 * @returns {Promise<User>} User entity
 * @example <caption>Example 1 usage of GetUser.</caption>
 * GetUser(123, { userRepository });
 * @example <caption>Example 2 usage of GetUser.</caption>
 * GetUser("610ecb6c694e4e006dc0622f", { userRepository });
 */
async function GetUser(id, { userRepository }) {
  const user = await userRepository.get(id);

  if (!user) {
    throw new Error('entity not found');
  }

  return user;
}

export { GetUser };
