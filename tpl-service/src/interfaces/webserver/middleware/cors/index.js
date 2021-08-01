import cors from 'cors';

export default app => {
  console.log('** Use middleware -> Cors');
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
};
