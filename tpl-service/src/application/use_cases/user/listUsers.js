/**
 * Retrieve all users
 * @async
 * @namespace application/use_cases/user/listUsers
 * @returns {Promise<User[]>} users list
 */
export async function ListUsers({ userRepository }) {
  const users = await userRepository.find();

  return users.records;
}
