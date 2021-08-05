/**
 * Retrieve user by id
 * @async
 * @namespace application/use_cases/user/getUser
 * @param {string|number} id User id
 * @returns {object} User entity
 */
async function GetUser(id, { userRepository }) {
  const user = await userRepository.get(id);

  if (!user) {
    throw new Error('entity not found');
  }

  return user;
}

export { GetUser };
