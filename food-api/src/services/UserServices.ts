import { User } from '../database/Schema'
import IUserServices from '../interfaces/IUserServices'
import { hash, compare } from 'bcryptjs'

export class UserServices implements IUserServices {
  async fetch() {
    return await User.find()
  }

  async fetchOne(id: string): Promise<any> {
    if ((await this.idAlreadyExists(id)) === false) {
      throw new Error('User not found')
    }

    return await User.findById(id)
  }

  async create(name: string, email: string, password: string, avatar?: string): Promise<any> {
    if (await this.emailAlreadyExists(email)) {
      throw new Error('Email already registered')
    }

    const hashPassword = await hash(password, 8)

    const user = await User.create({ name, email, password: hashPassword, avatar })
    return user
  }

  async delete(id: string): Promise<void> {
    if (await !this.idAlreadyExists(id)) {
      throw new Error('User not found')
    }

    await User.findByIdAndDelete(id)
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    if (await User.exists({ email: email })) {
      return true
    } else {
      return false
    }
  }

  async idAlreadyExists(id: string): Promise<boolean> {
    if (await User.exists({ _id: id })) {
      return true
    } else {
      return false
    }
  }
}
