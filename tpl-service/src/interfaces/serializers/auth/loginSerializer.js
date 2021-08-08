import BaseSerializer from '../serializer';

/**
 * Class representing a auth serializer.
 *
 * @class
 * @classdesc Auth serializer
 * @augments BaseSerializer
 */
class AuthSerializer extends BaseSerializer {
  /**
   * Serialize an auth entity
   * @function
   * @implements {BaseSerializer#singleSerialize}
   * @param {object} entity single auth entity
   * @returns {object} Returns auth serialized entity
   */
  singleSerialize({token}) {
    return { token };
  }
}

export default AuthSerializer;
