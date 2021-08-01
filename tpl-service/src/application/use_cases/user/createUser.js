import { User } from '../../../domain/entities/user';

/**
 * Create new user
 * @namespace application/use_cases/user/createUser
 * @async
 * @param {string} firstName User firstname
 * @param {string} lastName User lastName
 * @param {string} email User email
 * @param {string} password User password
 * @returns {object} User entity
 * @throws {DuplicateEntityException} Entity duplicate
 */
export async function CreateUser({ firstName, lastName, email, password }, { userRepository }) {
  const exists = await userRepository.getByEmail(email);

  if (exists) {
    throw new Error('user already exists, check that it is not disabled');
  }

  const user = new User(null, firstName, lastName, email, password);

  return userRepository.persist(user);
}
