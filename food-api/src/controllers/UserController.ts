import { Request, Response } from 'express'
import { UserServices } from '../services/UserServices'

const _userServices = new UserServices()

export class UserController {
  async hello(req: Request, res: Response) {
    res.send('Hello World!')
  }

  async getAll(req: Request, res: Response) {
    res.json(await _userServices.fetch())
  }

  async create(req: Request, res: Response) {
    const { name, email, password, avatar } = req.body

    try {
      const user = await _userServices.create(name, email, password, avatar)
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
      await _userServices.delete(id)
      res.status(204).json({ message: 'User deleted successful' })
    } catch (err: any) {
      if (err.message === 'User not found') {
        res.status(404).json({ message: err.message })
      } else {
        res.status(500).json({ message: err.message })
      }
    }
  }
}
