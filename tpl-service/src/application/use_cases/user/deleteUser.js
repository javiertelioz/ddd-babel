/**
 * Delete user
 * @namespace application/use_cases/user/deleteUser
 * @param {string|number} id User id
 * @returns {object} User entity
 */
export function DeleteUser(id, { userRepository }) {
  return userRepository.remove(id);
}
