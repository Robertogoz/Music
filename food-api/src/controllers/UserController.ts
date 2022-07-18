import { Request, Response } from 'express'
import { IUserServices } from '../interfaces/IUserServices'

export class UserController {
  constructor(private userServices: IUserServices) {}

  async hello(req: Request, res: Response) {
    res.send('Hello World!')
  }

  async getAll(req: Request, res: Response) {
    res.json(await this.userServices.fetch())
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await this.userServices.fetchOne(id)
      res.status(200).json(user)
    } catch (err: any) {
      res.status(404).json({ message: 'User not found' })
    }
  }

  async create(req: Request, res: Response) {
    const { name, email, password, avatar } = req.body

    try {
      const user = await this.userServices.create(name, email, password, avatar)
      res.status(201).json(user)
    } catch (err: any) {
      if (err.message === 'User already registered') {
        res.status(401).json({ message: err.message })
      } else {
        res.status(400).json({ message: err.message })
      }
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params

    try {
      await this.userServices.delete(id)
      res.status(204).json({ message: 'User deleted successful' })
    } catch (err: any) {
      if (err.message === 'User not found') {
        res.status(404).json({ message: err.message })
      } else {
        res.status(500).json({ message: err.message })
      }
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const authenticatedUser = await this.userServices.authenticate(email, password)
      res.status(200).json(authenticatedUser)
    } catch (err: any) {
      res.status(401).json(err.message)
    }
  }

  async changePassword(req: Request, res: Response) {
    const { id } = req.params
    const { currentPassword, newPassword } = req.body

    try {
      const response = await this.userServices.changePassword(id, currentPassword, newPassword)
      res.status(200).json(response)
    } catch (err: any) {
      if (err.message === 'User not found') {
        res.status(404).json(err.message)
      } else {
        res.status(400).json(err.message)
      }
    }
  }
}
