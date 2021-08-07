/**
 * Delete user
 * @function
 * @async
 * @module application/use_cases/user/DeleteUser
 * @param {string|number} id User id
 * @param {Object} dependencies - Dependencies
 * @param {function} dependencies.userRepository - User Repository.
 * @throws {Error} Entity not found
 * @returns {Promise<User>} User entity
 * @example <caption>Example 1 usage of DeleteUser.</caption>
 * DeleteUser(123, { userRepository });
 * @example <caption>Example 2 usage of DeleteUser.</caption>
 * DeleteUser("610ecb6c694e4e006dc0622f", { userRepository });
 */
async function DeleteUser(id, { userRepository }) {
  const exists = await userRepository.get(id);

  if (!exists) {
    throw new Error('entity not found');
  }

  return userRepository.remove(id);
}

export { DeleteUser };
