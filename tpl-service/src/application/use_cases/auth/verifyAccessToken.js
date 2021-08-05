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
function VerifyAccessToken(token, { jwtManager }) {
  const decoded = jwtManager.decode(token);

  if (!decoded) {
    throw new Error("you're not authorized");
  }

  return {
    uid: decoded.uid,
    role: decoded.role,
  };
}

export default VerifyAccessToken;
