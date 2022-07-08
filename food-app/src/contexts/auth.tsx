import axios, { AxiosResponse } from 'axios'
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
  spotify_token: string | undefined
}

interface IAuthContextData {
  SignIn(email: string, password: string): Promise<void>
  SignUp(name: string, email: string, password: string): Promise<AxiosResponse | undefined>
  ChangePassword(id: string, currentPassword: string, newPassword: string): Promise<AxiosResponse | undefined>
  SignOut(): void
  HandleSpotifyLogin(access_token: string): Promise<void>

  signed: boolean
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

  async function HandleSpotifyLogin(access_token: string): Promise<void> {
    try {
      const res = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + access_token,
        },
      })

      const { id, display_name, email, images } = res.data

      const spotifyUser = {
        _id: id,
        name: display_name,
        email: email,
        avatar: images[0].url,
        spotify_token: access_token,
      }

      setUser(spotifyUser)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), SignIn, SignUp, SignOut, ChangePassword, user, HandleSpotifyLogin }}
    >
      {children}
    </AuthContext.Provider>
  )
}
