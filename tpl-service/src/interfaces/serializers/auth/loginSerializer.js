/**
 * Single auth
 * @ignore
 * @param {object} auth Auth entity
 * @returns {object} User serializer
 */
const singleAuth = auth => ({ token: auth.token });

/**
 * Auth serializer
 * @class
 */
class AuthSerializer {
  /**
   * Auth serializer
   * @param {array} data Entities
   * @returns {Auth|Auth[]} Single auth or array
   */
  static serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }

    if (Array.isArray(data)) {
      return data.map(singleAuth);
    }

    return singleAuth(data);
  }
}

export default AuthSerializer;
