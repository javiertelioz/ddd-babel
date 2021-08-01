import { Router } from 'express';

import HelloController from '../../controllers/helloController';

const router = Router();

router.get('/hello/:name?', HelloController.sayHello);

export default router;
