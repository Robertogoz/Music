import React, { createContext, ReactNode } from 'react'
import axios from 'axios'

import { AuthContext } from './auth'

type SpotifyContextProps = {
  children: ReactNode
}

export type Playlist = {
  id: string
  name: string
  images: [
    {
      url: string
    }
  ]
}

export type Playlists = {
  items: [Playlist]
}

interface ISpotifyContextData {
  getAllPlaylists(): Promise<Playlists>
}

export const SpotifyContext = createContext<ISpotifyContextData>({} as ISpotifyContextData)

export function SpotifyProvider({ children }: SpotifyContextProps) {
  const { user } = React.useContext(AuthContext)

  async function getAllPlaylists(): Promise<Playlists> {
    try {
      const res = await axios.get('https://api.spotify.com/v1/me/playlists?limit=20&offset=0', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user?.spotify_token,
        },
      })
      return res.data
    } catch (err: any) {
      throw new Error(err)
    }
  }

  return <SpotifyContext.Provider value={{ getAllPlaylists }}>{children}</SpotifyContext.Provider>
}
