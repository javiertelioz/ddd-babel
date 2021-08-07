import { json, urlencoded } from 'express';
import Logger from '../../../infrastructure/logger';

import cors from './cors';
import helmet from './helmet';
import morgan from './morgan';
import compress from './compress';

/**
 * Register middleware
 * @ignore
 * @param {object} app Express application
 * @returns {void}
 */
export default app => {
  Logger.log('**  Load middleware list  **');
  cors(app);
  helmet(app);
  morgan(app);
  compress(app);

  app.use(json());
  app.use(urlencoded({ extended: false }));
};
