import { Schema, connect, model } from 'mongoose'

interface IUser {
  name: string
  email: string
  password: string
  created_at: Date
  avatar?: string
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  avatar: String,
})

export const User = model<IUser>('User', userSchema)

export async function runDb() {
  try {
    await connect('mongodb://localhost:27017/User')
    console.log('database connected')
  } catch (err) {
    console.log(err)
  }
}
