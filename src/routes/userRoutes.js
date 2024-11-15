import { Router } from 'express'
import UserController from '../controllers/userController.js'

const UserRoutes = Router()

UserRoutes.get('/users/:userId', UserController.getUserById); 
UserRoutes.post('/users', UserController.createUser); 
UserRoutes.put('/users/:userId', UserController.updateUser); 
UserRoutes.delete('/users/:userId', UserController.deleteUser);

export default UserRoutes
