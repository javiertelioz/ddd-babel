import helmet from 'helmet';

import Logger from '../../../../infrastructure/logger';

export default app => {
  Logger.log('-> Helmet middleware');

  app.use(helmet());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.frameguard({ action: 'deny' }));
};
