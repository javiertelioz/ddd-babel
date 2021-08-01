import helloRouter from './hello';
import userRouter from './user';

/**
 * Register routers
 * @ignore
 * @param {object} app Express application
 * @returns {void}
 */
export default app => {
  // Root Version API
  app.get('/', (req, res) => {
    res.json({
      // title: `Welcome to ${project.name}`,
      // description: project.description,
      docs: `http://${req.get('host')}/docs`,
      // version: project.version,
    });
  });

  // Routers V1
  app.use('/api/v1', [helloRouter, userRouter]);
};
