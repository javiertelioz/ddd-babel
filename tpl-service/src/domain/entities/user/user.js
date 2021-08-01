/**
 * User class
 * @class
 * @classdesc
 */
class User {
  /**
   * User Entity
   *
   * @param {string|number} id User id
   * @param {string} firstName User firstname eg. joe
   * @param {string} lastName User lastname eg. doe
   * @param {string} email User email eg. joe.doe@mail.com
   * @param {string} password User password
   * @param {string} picture User picture url
   * @param {string} phone User phone eg. +55 55 55 55 55
   * @param {string} gender User gender eg. male
   * @param {Date} dob User dob 2001-01-02
   */
  constructor(
    id = null,
    firstName = null,
    lastName = null,
    email = null,
    password = null,
    picture = null,
    phone = null,
    gender = null,
    dob = null
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email ? email.toLowerCase() : email;
    this.password = password;
    this.picture = picture;
    this.phone = phone;
    this.gender = gender;
    this.dob = dob;
  }
}

export { User };
