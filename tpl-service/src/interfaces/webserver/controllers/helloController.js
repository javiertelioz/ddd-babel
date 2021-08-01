import SayHello from '../../../application/use_cases/welcome/sayHello';

/**
 * Say Hello
 *
 * @param {Request} req Request object
 * @param {Response} res Response Object
 *
 * @returns {Response} response
 */
function sayHello(req, res) {
  const { name } = req.params;

  return res.json({
    message: SayHello(name),
  });
}

export default {
  sayHello,
};
