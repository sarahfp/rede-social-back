import { Router } from 'express'
import AuthController from '../controllers/authController.js'

const AuthRoutes = Router()

AuthRoutes.post('/login', AuthController.login)

export default AuthRoutes
