/**
 * Retrieve access token
 * @async
 * @namespace application/use_cases/auth/getAccessToken
 * @param {string} email User email
 * @param {string} password User password
 * @returns {string} JWT string
 */
export async function GetAccessToken(email, password, { userRepository, accessTokenManager, encryptionManager }) {
  const user = userRepository.getByEmail(email);

  if (!user || user.password !== password) {
    throw new Error('email or password are incorrect');
  }

  const hash = await encryptionManager.compare(password, user.password);

  if (!hash) {
    throw new Error('email or password are incorrect');
  }

  return accessTokenManager.generate({ uid: user.id, role: user.role });
}
