import morgan from 'morgan';

export default app => {
  console.log('** Use middleware -> Morgan');
  app.use(morgan('dev'));
};
