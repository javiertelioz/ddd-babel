/**
 * Retrieve welcome message
 * @namespace application/use_cases/welcome/sayHello
 * @param {string} [name=world] Name (optional)
 * @returns {string} welcome message
 */
function sayHello(name = 'world') {
  return `Hello ${name}!`;
}

export default sayHello;
