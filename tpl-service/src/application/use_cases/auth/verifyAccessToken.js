/**
 * @typedef {Object} JWT
 * @property {string} uid Entity Id
 * @property {string} role Role
 */

/**
 * Verify access token
 * @namespace application/use_cases/auth/verifyAccessToken
 * @param {string} token Access token
 * @returns {JWT} Access token data
 * @throws {InvalidTokenException} Invalid access token
 */
export function VerifyAccessToken(token, { accessTokenManager }) {
  const decoded = accessTokenManager.decode(token);

  if (!decoded) {
    throw new Error('invalid access token');
  }

  return {
    uid: decoded.uid,
    role: decoded.role,
  };
}
