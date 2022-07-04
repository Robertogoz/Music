import { IUser } from '../database/Schema'

export default interface IUserServices {
  fetch(): Promise<IUser[]>
  create(name: string, email: string, password: string, avatar?: string): Promise<any>

  emailAlreadyExists(email: string): Promise<boolean>
}
