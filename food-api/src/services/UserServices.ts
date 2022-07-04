import { User } from '../database/Schema'
import IUserServices from '../interfaces/IUserServices'
import { hash, compare } from 'bcryptjs'

export class UserServices implements IUserServices {
  async fetch() {
    return await User.find()
  }

  async create(name: string, email: string, password: string, avatar?: string): Promise<any> {
    if (await this.emailAlreadyExists(email)) {
      throw new Error('Email already registered')
    }

    const hashPassword = await hash(password, 8)

    const user = await User.create({ name, email, password: hashPassword, avatar })
    return user
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    if (await User.exists({ email: email })) {
      return true
    } else {
      return false
    }
  }
}
