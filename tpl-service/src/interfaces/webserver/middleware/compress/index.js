import compress from 'compression';

import Logger from '../../../../infrastructure/logger';

export default app => {
  Logger.log('-> Compression middleware');
  app.use(compress());
};
