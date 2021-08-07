/**
 * Retrieve access token
 * @async
 * @function
 * @module application/use_cases/auth/GetAccessToken
 * @param {Object} payload - Request payload
 * @param {string} payload.email User email
 * @param {string} payload.password User password
 * @param {Object} dependencies - Dependencies
 * @param {function} dependencies.userRepository - User Repository.
 * @param {function} dependencies.jwtManager - JWT Manager.
 * @param {function} dependencies.bcryptManager - Bcrypt Manager.
 * @throws {Error} Email or password are incorrect
 * @returns {Promise<string>} JWT string eg. "eyJ0eXAiO..."
 * @example <caption>Example usage of GetAccessToken.</caption>
 * GetAccessToken({
 *     email: "joe@mail.com",
 *     password: "doe_2021",
 *  },
 *  {
 *     userRepository,
 *     jwtManager,
 *     bcryptManager
 * });
 */
async function GetAccessToken({ email, password }, { userRepository, jwtManager, bcryptManager }) {
  const user = await userRepository.getByEmail(email);

  if (!user) {
    throw new Error('email or password are incorrect');
  }

  const hash = await bcryptManager.compare(password, user.password);

  if (!hash) {
    throw new Error('email or password are incorrect');
  }

  const token = jwtManager.generate({ uid: user.id, role: user.role });

  return { token };
}

export default GetAccessToken;
