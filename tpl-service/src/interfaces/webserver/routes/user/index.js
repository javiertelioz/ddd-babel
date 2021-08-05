import { Router } from 'express';

import UserController from '../../controllers/userController';

import AuthorizationMiddleware from '../../middleware/security';

const userController = new UserController();

const router = Router();

router.post('/users', userController.createUser);
router.get('/users', AuthorizationMiddleware, userController.getAllUsers);
router.get('/users/:id', AuthorizationMiddleware, userController.getUser);
router.put('/users/:id', AuthorizationMiddleware, userController.updateUser);
router.delete('/users/:id', AuthorizationMiddleware, userController.deleteUser);

export default router;
