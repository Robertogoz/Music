import { IUser } from '../database/Schema'

export default interface IUserServices {
  fetch(): Promise<IUser[]>
  create(name: string, email: string, password: string, avatar?: string): Promise<any>
  delete(id: string): Promise<void>

  emailAlreadyExists(email: string): Promise<boolean>
  idAlreadyExists(id: string): Promise<boolean>
}
