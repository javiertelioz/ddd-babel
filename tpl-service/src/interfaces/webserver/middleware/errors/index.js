/**
 * Global error handler
 *
 * @ignore
 * @param {Error} error Http error
 * @param {request} request Request object
 * @param {response} response Response object
 * @param {next} next Next function
 * @returns {response} Response error
 */
function handleErrors(error, request, response, next) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  const errors = error.errors || null;

  response.status(status).send({
    success: 'false',
    message,
    error: errors,
  });
}

export default handleErrors;
