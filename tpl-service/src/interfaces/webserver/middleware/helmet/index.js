import helmet from 'helmet';

import Logger from '../../../../infrastructure/logger';

/**
 * Helmet middleware
 * @ignore
 * @param {Object} app Express application
 * @returns {void}
 *
 * @see {@link https://www.npmjs.com/package/helmet|Helmet}
 */
export default app => {
  Logger.log('-> Helmet middleware');

  app.use(helmet());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.frameguard({ action: 'deny' }));
};
