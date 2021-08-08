import cors from 'cors';

import Logger from '../../../../infrastructure/logger';

/**
 * Cors middleware
 *
 * @ignore
 * @param {Object} app Express application
 * @returns {void}
 *
 * @see {@link https://www.npmjs.com/package/cors|Cors}
 */
export default app => {
  Logger.log('-> Cors middleware');
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
};
