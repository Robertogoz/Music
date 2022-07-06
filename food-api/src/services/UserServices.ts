import { User } from '../database/Schema'
import IUserServices from '../interfaces/IUserServices'
import { sign } from 'jsonwebtoken'
import { hash, compare } from 'bcryptjs'
import { ObjectId } from 'mongoose'

type UserType = {
  _id: ObjectId
  name: string
  email: string
  password: string
  avatar: string
  createdAt: Date
  updatedAt: Date
  __v: number
}

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
    if ((await this.idAlreadyExists(id)) === false) {
      throw new Error('User not found')
    }

    await User.findByIdAndDelete(id)
  }

  async authenticate(email: string, password: string): Promise<object> {
    if ((await this.emailAlreadyExists(email)) === false) {
      throw new Error('incorrect email or password')
    }

    const user: UserType | null = await User.findOne({ email: email })

    if ((await compare(password, user!.password)) === false) {
      throw new Error('incorrect email or password')
    }

    const token = sign({}, 'f3cff1a8-864f-4a4a-a199-90ca0081b847', {
      subject: user!._id.toString(),
      expiresIn: '10m',
    })

    const response = {
      user,
      token,
    }

    return response
  }

  async changePassword(id: string, currentPassword: string, newPassword: string): Promise<any> {
    if ((await this.idAlreadyExists(id)) === false) {
      throw new Error('User not found')
    }

    const user: UserType | null = await User.findById(id)

    const isValid: boolean = await compare(currentPassword, user!.password)

    if (!isValid) {
      throw new Error('Incorrect current password')
    } else {
      const newPasswordHash: string = await hash(newPassword, 8)
      const res = await User.updateOne({ _id: id }, { password: newPasswordHash })
      return res
    }
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
