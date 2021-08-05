import morgan from 'morgan';

import Logger from '../../../../infrastructure/logger';

export default app => {
  Logger.log('-> Morgan middleware');
  app.use(morgan('dev'));
};
