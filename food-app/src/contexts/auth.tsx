import { AxiosResponse } from 'axios'
import React, { createContext, ReactNode } from 'react'
import api from '../services/api'

type UserContextProps = {
  children: ReactNode
}

type User = {
  _id: string
  name: string
  email: string
  avatar?: string
}

interface IAuthContextData {
  signed: boolean
  SignIn(email: string, password: string): Promise<void>
  SignUp(name: string, email: string, password: string): Promise<AxiosResponse | undefined>
  ChangePassword(id: string, currentPassword: string, newPassword: string): Promise<AxiosResponse | undefined>
  SignOut(): void
  user: User | null
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export function AuthProvider({ children }: UserContextProps) {
  const [user, setUser] = React.useState<User | null>(null)

  function SignOut(): void {
    setUser(null)
  }

  async function SignIn(email: string, password: string): Promise<void> {
    try {
      const res = await api.post('/login', {
        email,
        password,
      })
      setUser(res.data.user)
      api.defaults.headers.common = { Authorization: `Bearer ${res.data.token}` }
    } catch (err: any) {
      throw new Error(err.response.data)
    }
  }

  async function SignUp(name: string, email: string, password: string): Promise<AxiosResponse | undefined> {
    try {
      const res = await api.post('/user', {
        name,
        email,
        password,
      })
      return res
    } catch (err: any) {
      throw new Error(err.response.data.message)
    }
  }

  async function ChangePassword(
    id: string,
    currentPassword: string,
    newPassword: string
  ): Promise<AxiosResponse | undefined> {
    try {
      const res = await api.put(`/changePassword/${id}`, {
        currentPassword,
        newPassword,
      })
      return res
    } catch (err: any) {
      throw new Error(err.response.data)
    }
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), SignIn, SignUp, SignOut, ChangePassword, user }}>
      {children}
    </AuthContext.Provider>
  )
}
