import { User } from '../../../domain/entities/user';

/**
 * Update new user
 * @namespace application/use_cases/user/updateUser
 * @async
 * @param {string|number} id User id
 * @param {string} firstName User firstname
 * @param {string} lastName User lastName
 * @param {string} email User email
 * @param {string} gender User gender
 * @returns {object} User entity
 * @throws {DuplicateEntityException} Entity duplicate
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
