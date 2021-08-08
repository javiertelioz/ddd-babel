import SayHello from '../../../application/use_cases/welcome/sayHello';

/**
 * Say hello handler
 *
 * @function
 * @namespace Controllers/HelloController
 * @memberof Controllers/HelloController
 * @param {Request} req Request
 * @param {Response} res Response
 * @returns {Response} Response
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
