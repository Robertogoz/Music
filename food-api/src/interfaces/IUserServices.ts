import { IUser } from '../database/Schema'

export default interface IUserServices {
  fetch(): Promise<IUser[]>
  fetchOne(id: string): Promise<any>
  create(name: string, email: string, password: string, avatar?: string): Promise<any>
  delete(id: string): Promise<void>
  authenticate(email: string, password: string): Promise<any>

  emailAlreadyExists(email: string): Promise<boolean>
  idAlreadyExists(id: string): Promise<boolean>
}
