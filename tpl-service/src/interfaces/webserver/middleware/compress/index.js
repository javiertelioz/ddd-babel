import compress from 'compression';

export default app => {
  console.log('** Use middleware -> Compression');
  app.use(compress());
};
