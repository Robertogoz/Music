import { Schema, connect, model } from 'mongoose'

export interface IUser {
  name: string
  email: string
  password: string
  avatar?: string
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: String,
  },
  { timestamps: true }
)

export const User = model<IUser>('User', userSchema)

export async function runDb() {
  try {
    await connect('mongodb://localhost:27017/User')
    console.log('database connected')
  } catch (err) {
    console.log(err)
  }
}
