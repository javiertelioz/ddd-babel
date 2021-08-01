import helmet from 'helmet';

export default app => {
  console.log('** Use middleware -> Helmet');

  app.use(helmet());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.frameguard({ action: 'deny' }));
};
