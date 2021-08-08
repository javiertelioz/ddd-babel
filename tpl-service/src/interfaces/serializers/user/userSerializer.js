import BaseSerializer from '../serializer';

/**
 * Class representing a user serializer.
 *
 * @class
 * @classdesc User serializer
 * @augments BaseSerializer
 *
 * @namespace Serializers/UserSerializer
 */
class UserSerializer extends BaseSerializer {
  /**
   * Serialize an user entity
   *
   * @function
   * @access protected
   * @memberof Serializers/UserSerializer
   * @implements {BaseSerializer#singleSerialize}
   * @param {object} user single user entity
   * @returns {object} Returns user serialized entity
   */
  singleSerialize(user) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  }
}

export default UserSerializer;
