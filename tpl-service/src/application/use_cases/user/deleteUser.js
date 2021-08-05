/**
 * Delete user
 * @async
 * @namespace application/use_cases/user/deleteUser
 * @param {string|number} id User id
 * @returns {object} User entity
 */
async function DeleteUser(id, { userRepository }) {
  const exists = await userRepository.get(id);

  if (!exists) {
    throw new Error('entity not found');
  }

  return userRepository.remove(id);
}

export { DeleteUser };
