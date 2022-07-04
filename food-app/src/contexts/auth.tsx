import React, { createContext, ReactNode } from 'react'
import api from '../services/api'

type UserContextProps = {
  children: ReactNode
}

interface IAuthContextData {
  signed: boolean
  SignIn(email: string, password: string): Promise<void>
  SignOut(): void
  user: object | null
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export function AuthProvider({ children }: UserContextProps) {
  const [user, setUser] = React.useState<object | null>(null)

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
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), SignIn, SignOut, user }}>{children}</AuthContext.Provider>
  )
}
