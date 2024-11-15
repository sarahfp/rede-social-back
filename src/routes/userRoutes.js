import { Router } from 'express';
import UserController from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const UserRoutes = Router();

UserRoutes.get('/user/:userId', authMiddleware, UserController.getUserById);
UserRoutes.post('/user', UserController.createUser);
UserRoutes.put('/user/:userId', authMiddleware, UserController.updateUser);
UserRoutes.delete('/user/:userId', authMiddleware, UserController.deleteUser);

export default UserRoutes;
