import cors from 'cors';

import Logger from '../../../../infrastructure/logger';

export default app => {
  Logger.log('-> Cors middleware');
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
};
