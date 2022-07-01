import { Request, Response } from 'express'

export class UserController {
  async hello(req: Request, res: Response) {
    res.send('Hello World!')
  }
}
