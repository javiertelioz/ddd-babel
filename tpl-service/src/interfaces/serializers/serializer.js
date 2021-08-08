import NotImplementedException from '../../domain/exceptions/NotImplementedException';
import NotUndefinedOrNullException from '../../domain/exceptions/NotUndefinedOrNullException';

/**
 * Interface represent a base serializer
 * @interface
 */
class BaseSerializer {
  /**
   * Serialize an entity or an array of them
   * @function
   * @name BaseSerializer#serialize
   * @param {array|object} data List of entities or a single entity
   * @throws {NotUndefinedOrNullException} Not implements
   * @returns {array|object} Returns serialized entities
   */
  serialize(data) {
    if (!data) {
      throw new NotUndefinedOrNullException();
    }
    if (Array.isArray(data)) {
      return data.map(this.singleSerialize);
    }
    return this.singleSerialize(data);
  }

  /**
   * Serialize an entity
   * @function
   * @name BaseSerializer#singleSerialize
   * @param {object} entity single entity
   * @throws {NotImplementedException} Not implements
   * @returns {object} Returns serialized entity
   */
  singleSerialize() {
    throw new NotImplementedException();
  }
}

export default BaseSerializer;
