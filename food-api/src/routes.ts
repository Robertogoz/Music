import { Router } from 'express'
import { UserController } from './controllers/UserController'

export const routes = Router()
const userController = new UserController()

routes.get('/', userController.hello)
routes.get('/users', userController.getAll)
routes.post('/user', userController.create)
routes.delete('/user/:id', userController.delete)
