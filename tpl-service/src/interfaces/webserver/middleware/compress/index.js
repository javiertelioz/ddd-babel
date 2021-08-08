import compress from 'compression';

import Logger from '../../../../infrastructure/logger';

/**
 * Compression middleware
 *
 * @ignore
 * @param {Object} app Express application
 * @returns {void}
 *
 * @see {@link https://www.npmjs.com/package/compression|Compress}
 */
export default app => {
  Logger.log('-> Compression middleware');
  app.use(compress());
};
