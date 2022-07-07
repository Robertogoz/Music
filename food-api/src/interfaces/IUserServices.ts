import { IUser } from '../database/Schema'

export type authenticatedUser = {
  user: IUser | null
  token: string
}

export default interface IUserServices {
  fetch(): Promise<IUser[]>
  fetchOne(id: string): Promise<any>
  create(name: string, email: string, password: string, avatar?: string): Promise<IUser>
  delete(id: string): Promise<void>
  authenticate(email: string, password: string): Promise<authenticatedUser>
  changePassword(id: string, currentPassword: string, newPassword: string): Promise<object>

  emailAlreadyExists(email: string): Promise<boolean>
  idAlreadyExists(id: string): Promise<boolean>
}
