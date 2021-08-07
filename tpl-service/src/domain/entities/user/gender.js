/**
 * Gender user
 * @class
 * @classdesc Gender of a user
 * @module domain/entities/user/Gender
 *
 * @example <caption>Example 1 usage of Gender.</caption>
 * Gender.MALE
 * @example <caption>Example 2 usage of Gender.</caption>
 * Gender.FEMALE
 */
class Gender {
  /**
   * Male gender
   *
   * @static
   * @constant
   * @type {string}
   * @default
   */
  static MALE = 'male';

  /**
   * Female gender
   * @static
   * @constant
   * @type {string}
   * @default
   */
  static FEMALE = 'female';

  /**
   * Unknown gender
   * @static
   * @constant
   * @type {string}
   * @default
   */
  static UNKNOWN = 'unknown';
}

export { Gender };
