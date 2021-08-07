/**
 * @typedef {Object} JWT
 * @property {string} uid Entity Id
 * @property {string} role Role
 */

/**
 * Verify access token
 * @function
 * @module application/use_cases/auth/VerifyAccessToken
 * @param {string} token Access token
 * @param {object} dependencies - Dependencies
 * @param {function} dependencies.jwtManager - JWT Manager.
 * @throws {InvalidTokenException} Invalid access token
 * @throws {Error} You're not authorized
 * @returns {JWT} Access token data
 * @example <caption>Example usage of VerifyAccessToken.</caption>
 * VerifyAccessToken("eyJ0eXAiO...", { jwtManager })
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
