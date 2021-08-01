import { Router } from 'express';

import UserController from '../../controllers/userController';

const userController = new UserController();

const router = Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUser);
router.put('/users', userController.updateUser);
router.post('/users', userController.createUser);
router.delete('/users', userController.deleteUser);

export default router;
