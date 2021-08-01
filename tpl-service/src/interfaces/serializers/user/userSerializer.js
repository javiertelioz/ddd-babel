/**
 * Serializer single user
 * @ignore
 * @param {User} user User entity
 * @returns {object} User serializer
 */
const _serializeSingleUser = user => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
};

/**
 * User serializer
 * @class
 */
class UserSerializer {
  /**
   * User serializer
   * @param {array} data Entities
   * @returns {User|User[]} Single user or array
   */
  static serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSingleUser(data);
  }
}

export default UserSerializer;
