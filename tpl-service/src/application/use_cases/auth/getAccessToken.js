/**
 * Retrieve access token
 * @async
 * @namespace application/use_cases/auth/getAccessToken
 * @param {string} email User email
 * @param {string} password User password
 * @returns {string} JWT string
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
