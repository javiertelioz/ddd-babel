import morgan from 'morgan';

import Logger from '../../../../infrastructure/logger';

/**
 * Helmet middleware
 *
 * @ignore
 * @param {Object} app Express application
 * @returns {void}
 *
 * @see {@link https://www.npmjs.com/package/morgan|Morgan}
 */
export default app => {
  Logger.log('-> Morgan middleware');
  app.use(morgan('dev'));
};
