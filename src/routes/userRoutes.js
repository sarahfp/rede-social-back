import { Router } from 'express'
import UserController from '../controllers/userController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const UserRoutes = Router()

UserRoutes.get('/users/:userId', authMiddleware, UserController.getUserById)
UserRoutes.post('/users', UserController.createUser)
UserRoutes.put('/users/:userId', authMiddleware, UserController.updateUser)
UserRoutes.delete('/users/:userId', authMiddleware, UserController.deleteUser)

export default UserRoutes
