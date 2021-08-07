/**
 * Retrieve all users
 * @function
 * @async
 * @module application/use_cases/user/ListUsers
 * @param {Object} dependencies - Dependencies
 * @param {function} dependencies.userRepository - User Repository.
 * @returns {Promise<User[]>} Users list
 * @example <caption>Example  usage of ListUsers.</caption>
 * ListUsers({ userRepository });
 */
async function ListUsers({ userRepository }) {
  const users = await userRepository.find();

  return users.records;
}

export { ListUsers };
