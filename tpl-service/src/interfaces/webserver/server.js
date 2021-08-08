import http from 'http';
import express from 'express';

import routers from './routes';
import middlewares from './middleware';
import handleErrors from './middleware/errors';

import NotFoundException from './exceptions/notFoundException';

/**
 * Create Server
 *
 * @ignore
 * @returns {object} Application
 */
const createServer = () => {
  const app = express();

  middlewares(app);
  routers(app);

  app.use('*', (req, res, next) => {
    next(new NotFoundException());
  });

  app.use(handleErrors);

  const { APP_HOST, APP_PORT } = process.env;
  const PORT = APP_PORT || 4000;

  const server = http.createServer(app);

  return {
    app,
    start: () => {
      server.listen(PORT, () => {
        console.log(`🌎 Web Server: http://${APP_HOST || 'localhost'}:${PORT}\n`);
      });
    },
  };
};

export default createServer;
