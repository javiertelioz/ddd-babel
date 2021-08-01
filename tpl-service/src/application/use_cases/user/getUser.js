/**
 * Retrieve user by id
 * @namespace application/use_cases/user/getUser
 * @param {string|number} id User id
 * @returns {object} User entity
 */
export function GetUser(id, { userRepository }) {
  return userRepository.get(id);
}
