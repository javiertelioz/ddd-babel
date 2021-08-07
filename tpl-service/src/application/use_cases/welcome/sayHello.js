/**
 * Retrieve welcome message
 * @function
 * @module application/use_cases/welcome/SayHello
 * @param {string} [name=world] Name (optional)
 * @returns {string} Welcome message eg. world
 * @example <caption>Example 1 usage of SayHello.</caption>
 * // Return "hello world"
 * SayHello();
 * @example <caption>Example 2 usage of SayHello.</caption>
 * // Return "hello joe"
 * SayHello("joe");
 */
function SayHello(name = 'world') {
  return `Hello ${name}!`;
}

export default SayHello;
