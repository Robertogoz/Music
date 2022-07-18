import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { UserServices } from './services/UserServices'

export const routes = Router()
const userServices = new UserServices()
const userController = new UserController(userServices)

routes.get('/', userController.hello.bind(userController))
routes.get('/users', userController.getAll.bind(userController))
routes.get('/user/:id', userController.getOne.bind(userController))
routes.post('/user', userController.create.bind(userController))
routes.post('/login', userController.login.bind(userController))
routes.put('/changePassword/:id', userController.changePassword.bind(userController))
routes.delete('/user/:id', userController.delete.bind(userController))
